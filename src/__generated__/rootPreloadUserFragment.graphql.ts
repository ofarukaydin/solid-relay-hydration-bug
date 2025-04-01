/**
 * @generated SignedSource<<9df73560f8072bfc1f408aaf9a1da402>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Theme = "Dark" | "Light" | "System" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type rootPreloadUserFragment$data = {
  readonly avatar: string | null | undefined;
  readonly id: string;
  readonly theme: Theme | null | undefined;
  readonly username: string;
  readonly " $fragmentType": "rootPreloadUserFragment";
};
export type rootPreloadUserFragment$key = {
  readonly " $data"?: rootPreloadUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"rootPreloadUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "rootPreloadUserFragment",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ebbf3340dd3b7c0ee1403de8aaee5204";

export default node;
