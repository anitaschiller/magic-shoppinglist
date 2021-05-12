import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  console.log(shoppingItems);

  function onSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const inputField = form.item;
    const shoppingItem = {
      name: inputField.value,
      isDone: false,
    };
    setShoppingItems([shoppingItem, ...shoppingItems]);
    form.reset();
    inputField.focus();
  }

  function toggleCheckbox(itemToToggle) {
    const updatedShoppingItems = shoppingItems.map((item) => {
      debugger;
      if (item.name === itemToToggle.name) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(updatedShoppingItems);
  }

  function renderItems(items) {
    return items.map((item, index) => (
      <ShoppingItem key={index}>
        <label>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleCheckbox(item)}
          />
          {item.name}
        </label>
      </ShoppingItem>
    ));
  }

  return (
    <main>
      <Headline>Magic Shopping App</Headline>
      <Form onSubmit={onSubmitForm}>
        <input type="text" name="item" />
        <PrimaryButton>Add to List</PrimaryButton>
      </Form>
      <Button>Show all items</Button>
      <Button>Show open items</Button>
      <ul>{renderItems(shoppingItems)}</ul>
    </main>
  );
}

export default App;

const Headline = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  place-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #999;
  border-radius: 100vw;
`;

const PrimaryButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #eea2a2 0%,
    #bbc1bf 19%,
    #57c6e1 42%,
    #b49fda 79%,
    #7ac5d8 100%
  );
  font-size: 1.2rem;
`;

const ShoppingItem = styled.li`
  list-style: none;
  padding: 0;

  input {
    transform: scale(1.2);
  }
`;
