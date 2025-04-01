import { Suspense } from "solid-js";
import { createFragment, createPreloadedQuery, loadQuery, useRelayEnvironment } from "solid-relay";
import { loadRootPreloadQuery } from "~/root.preload";
import rootPreloadUserFragment, {
  type rootPreloadUserFragment$data,
  type rootPreloadUserFragment$key,
} from "~/__generated__/rootPreloadUserFragment.graphql";
import { Show, type JSX } from "solid-js";
import rootQueryNode, { type rootPreloadQuery } from "~/__generated__/rootPreloadQuery.graphql";

function useAuth(): { me: () => rootPreloadUserFragment$data | undefined | null } {
  const query = createPreloadedQuery<rootPreloadQuery>(rootQueryNode, loadRootPreloadQuery);
  const user = createFragment<rootPreloadUserFragment$key>(
    rootPreloadUserFragment,
    () => query()?.me
  );
  return {
    me: user,
  };
}

function AuthGuard(props: {
  children: (me: rootPreloadUserFragment$data) => JSX.Element;
  fallback: JSX.Element;
}) {
  const { me } = useAuth();

  return (
    <Show when={me()?.id} fallback={props.fallback}>
      {props.children(me()!)}
    </Show>
  );
}

function Header() {
  return (
    <header class="bg-surface-layout-soft border-border-layout-1 sticky top-0 z-10 border-b py-6">
      <div class="flex items-center justify-between">
        <div class="container flex items-center justify-between">
          <div class="space-x-4">
            <a href="/">Home</a>
          </div>

          <AuthGuard
            fallback={
              <div class="flex items-center gap-2">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>
            }
          >
            {(me) => <div>You're logged in as {me.username}</div>}
          </AuthGuard>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Suspense fallback={<p>Loading...</p>}>Index</Suspense>
        </section>
      </main>
    </>
  );
}
