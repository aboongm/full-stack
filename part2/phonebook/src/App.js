import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const nameObj = {
      name: newName,
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
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
