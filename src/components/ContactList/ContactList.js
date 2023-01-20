import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredPhoneBook = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredPhoneBook.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
