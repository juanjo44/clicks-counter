
import './App.css';
import juanBetancourtLogo from './images/juan-betancourt-logo.svg';
import Button from './components/Button';
import Counter from './components/Counter';
import  {useState} from 'react';

function App() {

  const [clickAmount, setClickAmount] = useState(0);

  const clickManagement = () =>{
    setClickAmount(clickAmount + 1);
  };

  const resetCounter = () =>{
    setClickAmount(0)
  };
  return (
    <div className='App'>
      <div className='juan-betancourt-logo-container'>
        <img 
          className='juan-betancourt-logo'
          src={juanBetancourtLogo}
          alt='Logo de Juan Betancourt' />
      </div>
      <div className='principal-container'>
        <Counter
          clickAmount={clickAmount}/>
        <Button 
          text='Click'
          isAClickButton={true}
          clickManagement={clickManagement}/>
        <Button 
          text='Reset'
          isAClickButton={false}
          clickManagement={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
