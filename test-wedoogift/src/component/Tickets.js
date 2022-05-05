
const Tickets = (props)=> { 
    const {amount,ticket} = props || {}
return (
  <>
    {amount && ticket &&
    (
      <>
        <div className='App__card-text'>{`Votre montant est composé ${ticket?.cards?.length > 1 ? "des cartes suivantes" :"de carte suivante"} :`}</div>
        {
          ticket?.cards?.map((value,index)=>{  
            return <div key={index}className='App__card-item'>{value}€</div> 
          })
        }
      </>
      )
    }
  </>
)
}


export default Tickets