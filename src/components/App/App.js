import { GlobalStyle } from '../GlobalStyle';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Box, TiTle } from './App.styled';

export const App = () => {
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
