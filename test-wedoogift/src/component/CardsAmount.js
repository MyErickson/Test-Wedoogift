import React from 'react'

function CardsAmount(props) {
    const { amount , cardAmount, handleClickSearchCombination} = props || {}
  return (
    <>        
    { amount > 0 && cardAmount && (
        <>
          {cardAmount?.length > 1 ?
              <div className='App__card-text'>Votre montant n'est pas possible ,veillez choisir entre :</div>
            :
              <div className='App__card-text'>Votre montant n'est pas possible,le montant possible est de :</div>
          }
          
          {
            cardAmount?.map(({value},index)=>{
              return  <div key={index} className='App__card-item-amount' onClick={()=> handleClickSearchCombination(value)}>{value}€</div>
            })
          }      
        </>
      )}
    </>
  )
}

export default CardsAmount