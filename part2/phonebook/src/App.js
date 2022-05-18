import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterNames, setFilterNames] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterName = (e) => {
    setFilterNames(e.target.value);
  };

  const addNameNumber = (e) => {
    e.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
    };

    const checkName = persons.filter((person) => {
      if (newName === person.name) {
        return alert(`${newName} is already added to phonebook`);
      }
      return newName !== person.name;
    });

    setPersons(() =>
      checkName.length !== persons.length ? [...persons] : [...persons, nameObj]
    );
    setNewName('');
    setNewNumber('');
  };

  const filtered = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterNames)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterNames={filterNames} handleFilterName={handleFilterName} />
      <h2>add a new</h2>
      <PersonForm
        addNameNumber={addNameNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filtered={filtered} />
    </div>
  );
};

export default App;
