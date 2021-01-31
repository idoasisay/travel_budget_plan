import React from 'react';
import './App.scss';
import Header from './header'
import Calculator from './calculator'


const fakeData: {travel: string} = {
  travel: "hanguk"
}
const App: React.FC = () => {
  return (
    <div className="App">
        <Header
        travel={fakeData.travel}
        />
        <Calculator />
    </div>
  );
}

export default App;
