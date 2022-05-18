import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addNameNumber = (e) => {
    e.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
    };

    const filterName = persons.filter((person) => {
      if (newName === person.name) {
        return alert(`${newName} is already added to phonebook`);
      }
      return newName !== person.name;
    });

    setPersons(() =>
      filterName.length !== persons.length
        ? [...persons]
        : [...persons, nameObj]
    );
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameNumber}>
        <div>
          name:{' '}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:{' '}
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
