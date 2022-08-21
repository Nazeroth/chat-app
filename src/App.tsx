import './App.css';
import { useAppSelector } from './common/hooks/use-app-selector/useAppSelector.hook';
import { Chat } from './components/chat/chat';
import { Contacts } from './components/contacts/contacts';

function App() {
  const selectedUser = useAppSelector((state) => state.selectedUser);
  return (
    <div className="App">
      <Contacts />
      <section className="msger">{selectedUser !== 0 ? <Chat /> : <p>Select user to begin conversation</p>}</section>
    </div>
  );
}

export default App;
