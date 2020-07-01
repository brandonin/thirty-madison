/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateSquare
// ====================================================

export interface UpdateSquare_updateOneSquare {
  __typename: "Square";
  id: string;
  value: string;
  position: number;
  createdAt: any;
}

export interface UpdateSquare {
  updateOneSquare: UpdateSquare_updateOneSquare | null;
}

export interface UpdateSquareVariables {
  id?: string | null;
  value?: string | null;
}
