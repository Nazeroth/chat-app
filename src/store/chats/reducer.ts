import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../common/types/user-data.type';
import { getAnswer, setMessage, setSelectedUser } from './actions';

interface State {
  selectedUser: number;
  chat: Array<UserData>;
}

const initialState: State = {
  selectedUser: 0,
  chat: [
    {
      userID: 1,
      userImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/330px-Boris_Johnson_official_portrait_%28cropped%29.jpg',
      userName: 'Boris',
      messages: [
        {
          text: 'Dobriy den everybody',
          isAuthor: false,
          date: '19/08/2022, 13:19:32',
        },
        {
          text: 'sup',
          isAuthor: true,
          date: '19/08/2022, 13:20:45',
        },
      ],
    },
    {
      userID: 2,
      userImg:
        'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Josefina',
      messages: [
        {
          text: 'Hello, meeting at 16:00',
          isAuthor: false,
          date: '19/08/2022, 13:26:12',
        },
        {
          text: 'Copy',
          isAuthor: true,
          date: '19/08/2022, 13:28:16',
        },
      ],
    },
    {
      userID: 3,
      userImg:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      userName: 'Fred',
      messages: [
        {
          text: 'Wanna drink tomorrow?',
          isAuthor: false,
          date: '19/08/2022, 12:13:32',
        },
        {
          text: 'No, sry, maybe next week?',
          isAuthor: true,
          date: '19/08/2022, 13:14:23',
        },
      ],
    },
  ],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: {
    [getAnswer.fulfilled.type]: (state, action) => {
      const { id, isAuthor, text, date } = action.payload;
      const newMessage = { text, isAuthor, date };
      state.chat.map((el) => {
        if (el.userID === id) {
          el.messages = [...el.messages, newMessage];
        }
      });
    },
    [setMessage.type]: (state, action) => {
      const { id, isAuthor, text, date } = action.payload;
      const newMessage = { text, isAuthor, date };
      state.chat.map((el) => {
        if (el.userID === id) {
          el.messages = [...el.messages, newMessage];
        }
      });
    },
    [setSelectedUser.type]: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export default chatSlice.reducer;
