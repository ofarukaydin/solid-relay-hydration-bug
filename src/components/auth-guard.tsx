import type { rootPreloadUserFragment$data } from "~/__generated__/rootPreloadUserFragment.graphql";
import { loadRootPreloadQuery } from "~/root.preload";
import rootPreloadUserFragment, {
  type rootPreloadUserFragment$key,
} from "~/__generated__/rootPreloadUserFragment.graphql";
import { Show, type JSX } from "solid-js";
import rootQueryNode, { type rootPreloadQuery } from "~/__generated__/rootPreloadQuery.graphql";
import { graphql } from "relay-runtime";
import { createFragment, createPreloadedQuery } from "solid-relay";

export function useAuth(): { me: () => rootPreloadUserFragment$data | undefined | null } {
  const query = createPreloadedQuery<rootPreloadQuery>(rootQueryNode, loadRootPreloadQuery);
  const user = createFragment<rootPreloadUserFragment$key>(
    rootPreloadUserFragment,
    () => query()?.meFake
  );
  return {
    me: user,
  };
}

export function AuthGuard(props: {
  children: (me: () => rootPreloadUserFragment$data | undefined | null) => JSX.Element;
  fallback: JSX.Element;
}) {
  const { me } = useAuth();
  return (
    <Show when={me()?.id} fallback={props.fallback}>
      {props.children(me)}
    </Show>
  );
}
