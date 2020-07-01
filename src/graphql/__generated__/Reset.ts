/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Reset
// ====================================================

export interface Reset_reset_board_squares {
  __typename: "Square";
  id: string;
  value: string;
  position: number;
  createdAt: any;
}

export interface Reset_reset_board {
  __typename: "Board";
  id: string;
  squares: Reset_reset_board_squares[];
}

export interface Reset_reset {
  __typename: "Reset";
  board: Reset_reset_board;
}

export interface Reset {
  reset: Reset_reset;
}

export interface ResetVariables {
  boardId?: string | null;
}
