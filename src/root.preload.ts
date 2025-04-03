import { query } from "@solidjs/router";
import { loadQuery } from "solid-relay";
import { graphql } from "relay-runtime";
import { useRelayEnvironment } from "solid-relay";
import type { rootPreloadQuery } from "~/__generated__/rootPreloadQuery.graphql";

const rootPreloadUserFragment = graphql`
  fragment rootPreloadUserFragment on User {
    id
    theme
    avatar
    username
  }
`;

const rootPreloadQuery = graphql`
  query rootPreloadQuery {
    meFake {
      ...loginUserUpdateFragment
      ...rootPreloadUserFragment
    }
  }
`;

export const loadRootPreloadQuery = query(
  () => loadQuery<rootPreloadQuery>(useRelayEnvironment()(), rootPreloadQuery, {}),
  "RootPreloadQuery"
);
