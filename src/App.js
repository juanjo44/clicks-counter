
import './App.css';
import juanBetancourtLogo from './images/juan-betancourt-logo.svg';
import Button from './components/Button'
import { click } from '@testing-library/user-event/dist/click';

function App() {

  const clickManagement = () =>{
    console.log('Click')
  }

  const resetCounter = () =>{
    console.log('Reset')
  }
  return (
    <div className='App'>
      <div className='juan-betancourt-logo-container'>
        <img 
          className='juan-betancourt-logo'
          src={juanBetancourtLogo}
          alt='Logo de Juan Betancourt' />
      </div>
      <div className='principal-container'>
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
