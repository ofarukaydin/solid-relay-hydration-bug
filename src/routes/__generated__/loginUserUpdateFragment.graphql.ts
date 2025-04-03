/**
 * @generated SignedSource<<5f4a1bc593c8637c11eae1e07e50cac4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

const node: any = {};

(node as any).hash = "c201e23306de07168df81f401285bea8";

export default node;

export function validate(value: {
  readonly __typename: string;
  readonly __id: string;
  readonly " $fragmentSpreads": loginUserUpdateFragment$fragmentType;
}): false | {
  readonly __typename: "User";
  readonly __id: string;
  readonly " $fragmentSpreads": loginUserUpdateFragment$fragmentType;
} {
  return value.__typename === 'User' ? value : false;
}
