import { useState } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="container">
      <Feedback />
      <Statistics />
    </div>
  );
};

export default App;
