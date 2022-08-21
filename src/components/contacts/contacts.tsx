import { useState } from 'react';
import { useAppSelector } from '../../common/hooks/use-app-selector/useAppSelector.hook';
import { ContactContainer } from './contact-container/contact-container';
import avatar from '../../assets/images/avatar.png';
import './styles.css';

export const Contacts = () => {
  const [value, setValue] = useState('');
  const data = useAppSelector((state) => state.chat);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  const sortedChats = [...data].sort((a, b) =>
    b.messages[b.messages.length - 1].date.localeCompare(a.messages[a.messages.length - 1].date),
  );

  let searchChat;
  let searchUser;

  if (value) {
    searchChat = data.map((chat) => {
      const filtered = chat.messages.filter((message) => {
        return message.text.toLowerCase().includes(value.toLowerCase());
      });
      return { ...chat, messages: filtered };
    });

    searchUser = data.filter((chat) => chat.userName.toLowerCase().includes(value.toLowerCase()));
  }
  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <div className='user-avatar-container'>
          <img className="user-avatar" src={avatar} alt="user" />
        </div>
        <input className='search-input' type="text" value={value} onChange={handleChange} placeholder="Search or start new chat" />
      </div>
      {searchChat && (
        <>
          <p>Messages:</p>
          {searchChat.map(({ userID, userImg, userName, messages }) => {
            if (messages.length !== 0) {
              return (
                <ContactContainer
                  key={userID}
                  userID={userID}
                  userImg={userImg}
                  userName={userName}
                  messages={messages}
                />
              );
            }
          })}
        </>
      )}
      {searchUser && searchUser.length !== 0 && (
        <>
          <p>Contacts:</p>
          {searchUser.map(({ userID, userImg, userName, messages }) => {
            if (messages.length !== 0) {
              return (
                <ContactContainer
                  key={userID}
                  userID={userID}
                  userImg={userImg}
                  userName={userName}
                  messages={messages}
                />
              );
            }
          })}
        </>
      )}
      {!searchChat &&
        !searchUser &&
        sortedChats.map(({ userID, userImg, userName, messages }) => {
          return (
            <ContactContainer key={userID} userID={userID} userImg={userImg} userName={userName} messages={messages} />
          );
        })}
    </div>
  );
};
