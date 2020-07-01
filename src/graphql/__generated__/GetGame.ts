/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_game_whosTurn {
  __typename: "User";
  id: string;
  name: string;
  symbol: string;
}

export interface GetGame_game_users_score {
  __typename: "Score";
  id: string;
  value: number;
}

export interface GetGame_game_users {
  __typename: "User";
  id: string;
  name: string;
  symbol: string;
  score: GetGame_game_users_score;
}

export interface GetGame_game_board_squares {
  __typename: "Square";
  id: string;
  value: string;
  position: number;
  createdAt: any;
}

export interface GetGame_game_board {
  __typename: "Board";
  id: string;
  squares: GetGame_game_board_squares[];
}

export interface GetGame_game {
  __typename: "Game";
  id: string;
  whosTurn: GetGame_game_whosTurn;
  users: GetGame_game_users[];
  board: GetGame_game_board;
}

export interface GetGame {
  game: GetGame_game | null;
}

export interface GetGameVariables {
  gameId: string;
}
