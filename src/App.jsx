import React from 'react';
import Dropdown from '../src/components/Dropdown';
import './App.scss';

const items = [
  { value: '1', label: 'Selected Option' },
  { value: '2', label: 'Default Option' },
  { value: '3', label: 'Hovered Option' },
  { value: '4', label: 'Disabled Option', disabled: true },
  { value: '5', label: 'Text Option' },
  { value: '6', label: 'Icon and Text Option', icon: '🔔' },
  { value: '7', label: 'Icon and Text Option', icon: '🔔' },

];

const App = () => {
  const handleItemSelected = (item) => {
    console.log('Selected item:', item);
  };

  return (
    <div className="app-container">
      <h1>Reusable Dropdown Component</h1>
      <Dropdown
        items={items}
        defaultSelectedValue="2"
        placeholder="Select an item"
        searchable={true}
        upward={false}
        showTick={true}
        onItemSelected={handleItemSelected}
      />
    </div>
  );
};

export default App;
