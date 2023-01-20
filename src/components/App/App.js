import { GlobalStyle } from '../GlobalStyle';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Box, TiTle } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? users
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Box>
      <GlobalStyle />
      <TiTle>Phonebook</TiTle>
      <ContactForm />
      <TiTle>Contacts</TiTle>
      <Filter />
      <ContactList />
    </Box>
  );
};
