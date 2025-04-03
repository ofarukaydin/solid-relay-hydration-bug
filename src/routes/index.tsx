import { Suspense } from "solid-js";
import { createMutation } from "solid-relay";
import { graphql } from "relay-runtime";
import { AuthGuard } from "~/components/auth-guard";
import { Dropdown } from "~/components/profile-dropdown";

function Header() {
  const [logoutMutation, logoutMutationInFlight] = createMutation(graphql`
    mutation routesLogoutMutation {
      logout
    }
  `);

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
            {(me) => (
              <div>
                <Dropdown trigger={<span>You're logged in as {me()?.username}</span>}></Dropdown>
                <button
                  onClick={() => {
                    logoutMutation({
                      variables: {},
                      onCompleted(response, errors) {
                        window.location.reload();
                      },
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            )}
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
