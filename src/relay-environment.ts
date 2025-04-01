import { meros } from "meros/browser";
import { Environment, Network, Observable, RecordSource, Store } from "relay-runtime";
import type {
  FetchFunction,
  GraphQLResponse,
  IEnvironment,
  RequestParameters,
  Variables,
} from "relay-runtime";
import { isServer } from "solid-js/web";

const fetchFnImpl = async (params: RequestParameters, variables: Variables) => {
  // "use server";
  const getEvent = isServer ? (await import("vinxi/http")).getEvent : undefined;
  const cookie = () => (isServer ? getEvent?.().headers.get("cookie") ?? "" : document.cookie);

  const response = await fetch("https://api.dunurum.xyz/graphql", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, multipart/mixed",
      Cookie: cookie(),
    },
    body: JSON.stringify({ query: params.text, variables }),
  });

  const parts = await meros(response);
  if (Symbol.asyncIterator in parts) {
    return parts[Symbol.asyncIterator]();
  }
  return (await parts.json()) as GraphQLResponse;
};

const fetchFn: FetchFunction = (params, variables) =>
  Observable.create((sink) => {
    void (async () => {
      const parts = await fetchFnImpl(params, variables);
      if (Symbol.asyncIterator in parts) {
        for await (const part of parts) {
          if (!part.json) {
            sink.error(new Error("Failed to parse part as json."));
            break;
          }
          sink.next(part.body as GraphQLResponse);
          if (!(part.body as { hasNext: boolean }).hasNext) {
            break;
          }
        }
      } else {
        sink.next(parts);
      }

      sink.complete();
    })();
  });

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn);
  const store = new Store(new RecordSource());
  return new Environment({ store, network, isServer: isServer });
}
