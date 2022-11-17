import { useState } from 'react'

function Lottery() {

  const [ number, setNumber ] = useState(0);
  const [ historic, setHistoric ] = useState<number[]>([]);

  const handleLottery = (min: number, max: number): void => {
    const lottery = Math.floor(Math.random() * (max - min)) + min;
    setNumber(lottery);
    if(!historic.includes(lottery)) {
        setHistoric([...historic, lottery])
    } else {
        handleLottery(1,90)
    }
  }

  return (
    <>  
        <div className="title">
            <h2>Loterie</h2>
        </div>
        <button type="button" onClick={() => handleLottery(1,90)}>
            {number ? 'Tirer à nouveau' : 'Abracadabra !'}
        </button>
        {number > 0 ? <p style={{marginRight: 10}}>Vous avez tiré le chiffre : {number}</p> : null}
        {historic.length > 0 ?
            <>
                <h3>Derniers tirages :</h3>
                <ul>
                    {historic.map((elt) => <li key={elt}>{elt}</li>)}
                </ul>
            </>
        : null }
    </>
  )
}

export default Lottery;
