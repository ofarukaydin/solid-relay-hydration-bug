import { useNavigate } from "@solidjs/router";
import { graphql } from "relay-runtime";
import { createSignal } from "solid-js";
import { createMutation } from "solid-relay";
import type { loginMutation } from "~/routes/__generated__/loginMutation.graphql";
import type { loginUserUpdateQuery } from "~/routes/__generated__/loginUserUpdateQuery.graphql";

export default function LoginForm() {
  const [login, loginIsInFlight] = createMutation<loginMutation>(graphql`
    mutation loginMutation($input: MutationLoginInput!) {
      login(input: $input) {
        ...rootPreloadUserFragment
        ...loginUserUpdateFragment
      }
    }
  `);

  const navigate = useNavigate();

  const handleGoRegister = () => {
    navigate("/register");
  };

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = () => {
    login({
      variables: {
        input: {
          username: username(),
          password: password(),
        },
      },
      onCompleted(response, errors) {
        if (response.login) {
          navigate("/");
        }
      },
      updater(store, response) {
        const _ = graphql`
          fragment loginUserUpdateFragment on User @assignable {
            __typename
          }
        `;
        const { updatableData } = store.readUpdatableQuery<loginUserUpdateQuery>(
          graphql`
            query loginUserUpdateQuery @updatable {
              me {
                ...loginUserUpdateFragment
              }
            }
          `,
          {}
        );
        updatableData.me = response?.login;
      },
    });
  };

  return (
    <div class="center flex h-full w-full">
      <div>
        <div class="m-auto grid h-full w-full max-w-2xl gap-8">
          <div class="grid justify-center gap-4">
            <div class="grid gap-1">
              <p>Welcome back!</p>
              <p>We're so excited to see you again!</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void handleSubmit();
            }}
            class="grid gap-8"
          >
            <div class="grid gap-6">
              <div>
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username()}
                  onInput={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password()}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
