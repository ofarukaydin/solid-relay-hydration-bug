/**
 * @generated SignedSource<<c8b487b93ff1498a36a62e8e25033101>>
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
  get meFake(): Record<PropertyKey, never> | null | undefined;
  set meFake(value: {
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
        "name": "meFake",
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

(node as any).hash = "9345ce9f3610db18b06d06b848d1d0be";

export default node;
