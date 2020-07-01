/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_game_users {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetGame_game_board_squares {
  __typename: "Square";
  id: string;
  value: string;
  xPosition: number;
  yPosition: number;
}

export interface GetGame_game_board {
  __typename: "Board";
  id: string;
  squares: GetGame_game_board_squares[];
}

export interface GetGame_game {
  __typename: "Game";
  id: string;
  users: GetGame_game_users[];
  board: GetGame_game_board;
}

export interface GetGame {
  game: GetGame_game | null;
}

export interface GetGameVariables {
  gameId: string;
}
