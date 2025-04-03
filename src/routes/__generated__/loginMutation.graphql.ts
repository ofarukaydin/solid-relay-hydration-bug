/**
 * @generated SignedSource<<3e819fb076fe99e239a2033ba6bdb831>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MutationLoginInput = {
  password: string;
  username: string;
};
export type loginMutation$variables = {
  input: MutationLoginInput;
};
export type loginMutation$data = {
  readonly login: {
    readonly __typename: "User";
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"loginUserUpdateFragment" | "rootPreloadUserFragment">;
  } | null | undefined;
};
export type loginMutation = {
  response: loginMutation$data;
  variables: loginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "rootPreloadUserFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "loginUserUpdateFragment"
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "login",
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
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "137a2468063f2435d322ccf0463c033f",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $input: MutationLoginInput!\n) {\n  login(input: $input) {\n    ...rootPreloadUserFragment\n    ...loginUserUpdateFragment\n    id\n  }\n}\n\nfragment loginUserUpdateFragment on User {\n  __typename\n}\n\nfragment rootPreloadUserFragment on User {\n  id\n  theme\n  avatar\n  username\n}\n"
  }
};
})();

(node as any).hash = "f09307333fcf92ee00282fbcf6db4485";

export default node;
