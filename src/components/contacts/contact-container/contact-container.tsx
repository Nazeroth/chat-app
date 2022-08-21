import { useAppDispatch } from '../../../common/hooks/use-app-dispatch/useAppDispatch.hook';
import { useAppSelector } from '../../../common/hooks/use-app-selector/useAppSelector.hook';
import { UserData } from '../../../common/types/user-data.type';
import { setSelectedUser } from '../../../store/chats/actions';
import './styles.css';

export const ContactContainer = ({ userID, userImg, userName, messages }: UserData) => {
  const selectedUser = useAppSelector((state) => state.selectedUser);
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    dispatch(setSelectedUser(id));
  };

  const lastMessage = [...messages].pop();
  return (
    <div className={selectedUser === userID ? 'contact-container selected' : 'contact-container'} key={userID}>
      <div className="contacts-wrapper" onClick={() => handleClick(userID)}>
        <img className="photo" src={userImg} alt={userName} />
        <div className="contacts-info">
          <div className="contacts-name">{userName}</div>
          <div className="contacts-message">
            <p className="contacts-text">{lastMessage?.text}</p>
            <p>{lastMessage?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
