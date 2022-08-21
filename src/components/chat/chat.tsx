import { useState } from 'react';
import { useAppDispatch } from '../../common/hooks/use-app-dispatch/useAppDispatch.hook';
import { useAppSelector } from '../../common/hooks/use-app-selector/useAppSelector.hook';
import { getAnswer, setMessage } from '../../store/chats/actions';
import { Message } from '../message/message';
import { ChatHeader } from './chat-header/chat-header';
import './style.css';

export const Chat = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.chat);
  const selectedUser = useAppSelector((state) => state.selectedUser);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const selectedChat = data.find((data) => data.userID === selectedUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomResponseTime = Math.random() * 5000 + 10000;
    dispatch(setMessage({ id: selectedUser, message: value }));
    setValue('');
    setTimeout(() => {
      dispatch(getAnswer(selectedUser));
    }, randomResponseTime);
  };

  return (
    <>
      <div className="msger-chat">
        {data.map(({ messages, userID, userImg, userName }) => {
          return (
            <>
              {selectedChat?.userID === userID && (
                <>
                  <ChatHeader name={userName} image={userImg} />
                  {messages.map(({ text, isAuthor, date }, index) => {
                    return isAuthor ? (
                      <Message text={text} date={date} name={'You'} key={index} className="msg right-msg" />
                    ) : (
                      <Message
                        text={text}
                        date={date}
                        name={userName}
                        key={index}
                        image={userImg}
                        className="msg left-msg"
                      />
                    );
                  })}
                </>
              )}
            </>
          );
        })}
      </div>
      <form className="msger-inputarea" onSubmit={handleSubmit}>
        <input
          className="msger-input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter your message..."
        />
        <button className="msger-send-btn">Send</button>
      </form>
    </>
  );
};
