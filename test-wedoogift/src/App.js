import { useEffect,useState } from 'react';
import './App.css';
import { searchCombination } from './modules/step-engine/api/step-engine-api';
import Tickets from './component/Tickets'
import CardsAmount from './component/CardsAmount';


const App = ()=> {
  const [amount,setAmount]= useState(0)
  const [cardAmount,setcardAmount]= useState()
  const [ticket,setTicket]= useState()

  useEffect(()=>{
    if(!parseInt(amount)){
      setcardAmount()
      setTicket()
    }
  },[amount])

  const handleClickSearchCombination= async(suggestedAmount)=>{
    const resAmount = suggestedAmount ? suggestedAmount : amount
    const { data } = await searchCombination(5,resAmount) || {}
    setAmount(parseInt(resAmount))
    if(Object.keys(data).includes("equal")){
      setTicket(data.equal)
      setcardAmount()
    }else {
      setcardAmount(Object.values(data))
      setTicket()
    }
  }

  const handleChangeAmount=(e)=>{
    const { value } = e.target
    if(parseInt(value) > 0){
      setAmount(parseInt(value))
    }else{
      setAmount()
    }
  }

  const handleKeyUpAmount=(e)=>{
    e.key ==="Enter" && handleClickSearchCombination()
  }

  const handleClickButtonMoreLess=(e)=>{
    const { name } = e.target 
    const moreLessAmount = name === "more" ? amount+1 : amount-1
    setAmount(moreLessAmount)
    handleClickSearchCombination(moreLessAmount)
  }

  return (
    <div className="App">
      <div className="App__content-amount">
        <input 
          className="App__input-amount" 
          placeholder='0' 
          id="amount" 
          name="amount" 
          value={amount ||''}
          onChange={(e)=> handleChangeAmount(e)}
          onKeyUp={(e)=> handleKeyUpAmount(e)}
        />
        <div className="App__content-amount-button">
          <button className='App__button-more' name="more" onClick={(e)=>{handleClickButtonMoreLess(e)}}>+</button>
          <button className='App__button-less' name="less" onClick={(e)=>{handleClickButtonMoreLess(e)}}>-</button>
      </div>
    </div>

      <button 
        className="App__button" 
        type="button"   
        onClick={()=>handleClickSearchCombination()}
      >
        valider
      </button>
      <div className='App__card'>
        <Tickets 
          ticket={ticket}
          amount={amount}
        />
        <CardsAmount
          cardAmount={cardAmount}
          amount={amount}
          handleClickSearchCombination={handleClickSearchCombination}
        />
      </div>
    </div>
  );
}

export default App;
