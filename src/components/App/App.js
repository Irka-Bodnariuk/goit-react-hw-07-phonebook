import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

import { GlobalStyle } from "../GlobalStyle";

import { Filter } from "components/Filter/Filter";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

import { Box, TiTle } from "./App.styled";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box>
      <GlobalStyle />
      <TiTle>Phonebook</TiTle>
      <ContactForm />
      <TiTle>Contacts</TiTle>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactList />
    </Box>
  );
};
