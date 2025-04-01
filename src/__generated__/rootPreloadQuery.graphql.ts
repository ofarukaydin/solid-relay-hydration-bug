/**
 * @generated SignedSource<<70150e1891f74de3515096d79a9e6acf>>
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
    readonly " $fragmentSpreads": FragmentRefs<"rootPreloadUserFragment">;
  } | null | undefined;
};
export type rootPreloadQuery = {
  response: rootPreloadQuery$data;
  variables: rootPreloadQuery$variables;
};

const node: ConcreteRequest = {
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
    "cacheID": "69465ca93a82c0dc175136f1c89dd357",
    "id": null,
    "metadata": {},
    "name": "rootPreloadQuery",
    "operationKind": "query",
    "text": "query rootPreloadQuery {\n  me {\n    ...rootPreloadUserFragment\n    id\n  }\n}\n\nfragment rootPreloadUserFragment on User {\n  id\n  theme\n  avatar\n  username\n}\n"
  }
};

(node as any).hash = "277737a7b05889d1d7c619238b18fbf2";

export default node;
