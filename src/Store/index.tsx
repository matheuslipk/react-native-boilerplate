import {createState, State, useState} from '@hookstate/core';
import {SessionInterface} from '../Models/SessionInterface';

const INITIAL_STATE = {
  token: '',
  logged: false,
  user: {
    id: 0,
    name: '',
    phone: '',
    token: '',
  },
} as SessionInterface;

const userState = createState(INITIAL_STATE);

const wrapState = (session: State<SessionInterface>) => ({
  getUser: () => session.user,
  token: session.token,
  logged: session.logged,
  logout: () => {
    session.logged.set(false);
    session.user.id.set(0);
  },
});

export const useGlobalStateSession = () => wrapState(useState(userState));
