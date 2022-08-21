import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ActionType } from './common';

interface UserData {
  id: number;
  message: string;
}

export const getAnswer = createAsyncThunk(ActionType.GET_ANSWER, async (id: number) => {
  const URL = 'https://api.chucknorris.io/jokes/random';

  const response = await axios.get(URL);
  const newMessage = {
    id,
    text: response.data.value,
    date: new Date().toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric' }),
    isAuthor: false,
  };
  return newMessage;
});

export const setMessage = createAction(ActionType.SET_MESSAGE, ({ id, message }: UserData) => {
  const newMessage = {
    id,
    text: message,
    date: new Date().toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric' }),
    isAuthor: true,
  };
  return { payload: newMessage };
});

export const setSelectedUser = createAction(ActionType.SET_SELECT_USER, (id) => {
  return { payload: id };
});
