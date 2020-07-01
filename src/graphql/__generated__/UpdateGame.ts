/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateGame
// ====================================================

export interface UpdateGame_updateOneGame_whosTurn {
  __typename: "User";
  id: string;
  name: string;
  symbol: string;
}

export interface UpdateGame_updateOneGame_board_squares {
  __typename: "Square";
  id: string;
  value: string;
  position: number;
  createdAt: any;
}

export interface UpdateGame_updateOneGame_board {
  __typename: "Board";
  id: string;
  squares: UpdateGame_updateOneGame_board_squares[];
}

export interface UpdateGame_updateOneGame {
  __typename: "Game";
  id: string;
  whosTurn: UpdateGame_updateOneGame_whosTurn;
  board: UpdateGame_updateOneGame_board;
}

export interface UpdateGame {
  updateOneGame: UpdateGame_updateOneGame | null;
}

export interface UpdateGameVariables {
  id?: string | null;
  userId?: string | null;
}
