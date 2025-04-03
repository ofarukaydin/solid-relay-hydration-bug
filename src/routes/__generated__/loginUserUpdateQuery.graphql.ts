/**
 * @generated SignedSource<<45a4c52dcf839b4e22e82a62cd7be6ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type loginUserUpdateQuery$variables = Record<PropertyKey, never>;
export type loginUserUpdateQuery$data = {
  get me(): Record<PropertyKey, never> | null | undefined;
  set me(value: {
    readonly __typename: "User";
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"loginUserUpdateFragment">;
  } | null | undefined);
};
export type loginUserUpdateQuery = {
  response: loginUserUpdateQuery$data;
  variables: loginUserUpdateQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginUserUpdateQuery",
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
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

(node as any).hash = "849a3a9a0a0fd4b99e3e696b050f944a";

export default node;
