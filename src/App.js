import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title:
      '1 .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, ab.',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo autem magni nemo cupiditate beatae quis iste aliquid! Eius enim unde illo quam nihil cum illum sed inventore labore accusantium?',
  },
  {
    title:
      '2 .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, ab.',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo autem magni nemo cupiditate beatae quis iste aliquid! Eius enim unde illo quam nihil cum illum sed inventore labore accusantium?',
  },
  {
    title:
      '3 .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, ab.',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo autem magni nemo cupiditate beatae quis iste aliquid! Eius enim unde illo quam nihil cum illum sed inventore labore accusantium?',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

const showAccordion = () => {
  if (window.location.pathname === '/') return <Accordion items={items} />;
};
const showLists = () => {
  if (window.location.pathname === '/Lists') return <Search />;
};
const showDropdown = () => {
  if (window.location.pathname === '/Dropdown')
    return <Dropdown options={options} />;
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="min-w-screen">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;
