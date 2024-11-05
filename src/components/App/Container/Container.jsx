import { useState } from "react"
import FormPanel from "./FormPanel/FormPanel"
import ResultPanel from "./ResultPanel/ResultPanel"


const Container = () => {
    const [bill, setBill] = useState(null);
    const [finalPercentage, setFinalPercentage] = useState(0);
    const [customTip, setCustomTip] = useState(null);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [valid, setValid] = useState(false);


  let myProps = {
    bill,
    setBill,
    finalPercentage,
    setFinalPercentage,
    customTip,
    setCustomTip,
    numOfPeople,
    setNumOfPeople,
    tipAmount,
    setTipAmount,
    total,
    setTotal,
    valid,
    setValid,
  }

  return (
    <div className="main__container">
      
      <FormPanel {...myProps} />
      <ResultPanel {...myProps} />
    </div>
  )
}

export default Container
