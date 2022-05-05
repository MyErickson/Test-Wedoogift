import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';

const App = ()=> {

  return (
    <div className="App">
        <input className="App__input-amount"type="number" placeholder='0' id="amount" name="amount" required/>
        <button className="App__button" type="button">valider</button>
        <div className='App__card'>
          <div className='App__card-text'>Votre montant est composé des cartes suivantes :</div>
          <div className='App__card-text'>Votre montant n'est pas possible,le montant possible est de 20€ :</div>
          <div className='App__card-item'>45€</div>

          <div className='App__card-text'>Votre montant n'est pas possible ,veillez choisir entre :</div>
          <div className='App__card-item-amount'>45€</div>

        </div>
    </div>
  );
}

export default App;
