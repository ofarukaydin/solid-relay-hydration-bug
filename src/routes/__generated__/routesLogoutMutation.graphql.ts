/**
 * @generated SignedSource<<30480e152570a428244bc66ef3ce1e24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type routesLogoutMutation$variables = Record<PropertyKey, never>;
export type routesLogoutMutation$data = {
  readonly logout: boolean | null | undefined;
};
export type routesLogoutMutation = {
  response: routesLogoutMutation$data;
  variables: routesLogoutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "logout",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesLogoutMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routesLogoutMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7d43faf0b46b1fe03378072659b35d26",
    "id": null,
    "metadata": {},
    "name": "routesLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation routesLogoutMutation {\n  logout\n}\n"
  }
};
})();

(node as any).hash = "b71679d4f128ca9b807cecc0b5fd6465";

export default node;
