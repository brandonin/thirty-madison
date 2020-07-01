/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Initialize
// ====================================================

export interface Initialize_initialize_game_users {
  __typename: "User";
  id: string;
  name: string;
}

export interface Initialize_initialize_game_board_squares {
  __typename: "Square";
  id: string;
  value: string;
  xPosition: number;
  yPosition: number;
}

export interface Initialize_initialize_game_board {
  __typename: "Board";
  id: string;
  squares: Initialize_initialize_game_board_squares[];
}

export interface Initialize_initialize_game {
  __typename: "Game";
  id: string;
  users: Initialize_initialize_game_users[];
  board: Initialize_initialize_game_board;
}

export interface Initialize_initialize {
  __typename: "Initialize";
  game: Initialize_initialize_game;
}

export interface Initialize {
  initialize: Initialize_initialize;
}

export interface InitializeVariables {
  username1: string;
  username2: string;
}
