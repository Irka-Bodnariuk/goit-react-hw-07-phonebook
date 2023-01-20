import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredPhoneBook = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <List>
      {filteredPhoneBook.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}{' '}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
