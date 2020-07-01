/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateScore
// ====================================================

export interface UpdateScore_updateOneScore {
  __typename: "Score";
  id: string;
  value: number;
}

export interface UpdateScore {
  updateOneScore: UpdateScore_updateOneScore | null;
}

export interface UpdateScoreVariables {
  id?: string | null;
  value?: number | null;
}
