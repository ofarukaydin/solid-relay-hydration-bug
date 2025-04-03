/**
 * @generated SignedSource<<128f7a61d7adde89b9b25e032af0fc26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type rootPreloadQuery$variables = Record<PropertyKey, never>;
export type rootPreloadQuery$data = {
  readonly me: {
    readonly __typename: "User";
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"loginUserUpdateFragment" | "rootPreloadUserFragment">;
  } | null | undefined;
};
export type rootPreloadQuery = {
  response: rootPreloadQuery$data;
  variables: rootPreloadQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "rootPreloadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "loginUserUpdateFragment"
          },
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "rootPreloadUserFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "rootPreloadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "theme",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ba117c315bf46a231421889fe5d331ad",
    "id": null,
    "metadata": {},
    "name": "rootPreloadQuery",
    "operationKind": "query",
    "text": "query rootPreloadQuery {\n  me {\n    ...loginUserUpdateFragment\n    ...rootPreloadUserFragment\n    id\n  }\n}\n\nfragment loginUserUpdateFragment on User {\n  __typename\n}\n\nfragment rootPreloadUserFragment on User {\n  id\n  theme\n  avatar\n  username\n}\n"
  }
};
})();

(node as any).hash = "ce5267536057e435357a9820b768d738";

export default node;
