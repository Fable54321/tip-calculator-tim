import { useEffect } from "react"


const ResultPanel = (myProps) => {

  const { bill, setValid, finalPercentage, numOfPeople, setTipAmount, setTotal } = myProps;



  useEffect(() => {
    if (bill > 0 && finalPercentage && numOfPeople > 0) {
      setValid(true);

      const calculatedTipAmount = (bill * finalPercentage / 100) / numOfPeople;
      setTipAmount(calculatedTipAmount.toFixed(2));

      const calculatedTotal = (bill / numOfPeople) + calculatedTipAmount;
      setTotal(calculatedTotal.toFixed(2));
    }
  }, [bill, finalPercentage, numOfPeople, setValid, setTipAmount, setTotal]);

  // Rest of the component code




  

  return (

  

    <article className="main__result-panel">
      <div className="main__result-panel__total-tip">
        <h2>Tip Amount <br/> <span>/ person</span></h2>
        <p>${myProps.tipAmount.toFixed(2)}</p>
      </div>
      <div className="main__result-panel__total-person">
        <h2>Total <br/> <span>/ person</span></h2>
        <p>${myProps.total ? myProps.total.toFixed(2): "0.00"}</p>
      </div>
      <form>
      <button>RESET</button>
      </form>
    </article>
  )
}

export default ResultPanel
