import {createState, State, useState} from '@hookstate/core';

export interface SessionInterface {
  id: number;
  name: string;
  phone: string;
  token: string;
}

const userState = createState({
  id: 0,
  name: '',
  phone: '',
  token: '',
} as SessionInterface);

const wrapState = (user: State<SessionInterface>) => ({
  user,
});

export const useGlobalStateUser = () => wrapState(useState(userState));
