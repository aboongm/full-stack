import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
      </div>
      <h1>statistics</h1>
      <p>good 6</p>
      <p>neutral 2</p>
      <p>bad 2</p>
      <p>all 9</p>
      <p>average 0.55%</p>
      <p>positive 66.5%</p>
    </div>
  );
};

export default App;
