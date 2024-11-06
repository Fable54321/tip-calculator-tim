import { useEffect, useState } from "react";


const FormPanel = (myProps) => {

  const [activeButton, setActiveButton] =useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })

  const [displayIcon, setDisplayIcon] = useState('none');


  const handleClick = (e) => {
    e.preventDefault();

    setDisplayIcon('none');
    
     let value= e.target.value;

    myProps.setFinalPercentage(value);

    const id = e.target.id;

    setActiveButton((prevState) => {
      const newActiveButton = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === id;
        return acc;
      }, {});
      return newActiveButton;
    });

    myProps.setCustomTip("");
    
  };

  const handleChange = (e) => {

    myProps.setFinalPercentage(e.target.value);
    setDisplayIcon('block');

    if (e.target.value.length < 4) {
      myProps.setCustomTip(e.target.value);

      if (e.target.value > 100) {
        myProps.setCustomTip(100);
      }

      
    }

    setActiveButton({ 1: false, 2: false, 3: false, 4: false, 5: false });
  };


useEffect(() => {
  if(myProps.numOfPeople > 0 || myProps.numOfPeople === null){ 
    myProps.setValid(true)
  }if(myProps.numOfPeople === 0) {
    myProps.setValid(false)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[myProps.numOfPeople, myProps])
  




 

  return (
    <article className="main__form-panel">
      <form className="main__form-panel__form">
        <div className="main__form-panel__form__bill">
          <label htmlFor="bill">
            <h2>Bill</h2>
          </label>
          <input
            placeholder="0"
            type="number"
            id="bill"
            name="bill"
            value={myProps.bill}
            onChange={(e) =>
              e.target.value.length < 7 && myProps.setBill(e.target.value)
            }
          />
        </div>
        <div className="main__form-panel__form__tip-select">
          <h2>Select Tip %</h2>
          <div className="main__form-panel__form__tip-select__grid">
            <button
              id={1}
              value={5}
              className={activeButton[1] ? "btn-active" : ""}
              onClick={handleClick}
            >
              5%
            </button>
            <button
              id={2}
              value={10}
              className={activeButton[2] ? "btn-active" : ""}
              onClick={handleClick}
            >
              10%
            </button>
            <button
              id={3}
              value={15}
              className={activeButton[3] ? "btn-active" : ""}
              onClick={handleClick}
            >
              15%
            </button>
            <button
              id={4}
              value={25}
              className={activeButton[4] ? "btn-active" : ""}
              onClick={handleClick}
            >
              25%
            </button>
            <button
              id={5}
              value={50}
              className={activeButton[5] ? "btn-active" : ""}
              onClick={handleClick}
            >
              50%
            </button>
            <div className="main__form-panel__form__tip-select__grid__custom">
              <input
                value={myProps.customTip}
                onChange={(e) => handleChange(e)}
                placeholder="Custom"
                type="text"
              />
              <p style={{ display: displayIcon }}>%</p>
            </div>
          </div>
        </div>
        <div className="main__form-panel__form__num-of-people">
          <label htmlFor="numOfPeople">
            <h2>Number of People</h2>
          </label>
          <div className="main__form-panel__form__num-of-people__input">
            <input
              data-type={myProps.valid ? "ok" : "error"}
              placeholder="0"
              type="number"
              id="numOfPeople"
              name="numOfPeople"
              min={1}
              max={20}
              value={myProps.numOfPeople}
              onChange={(e) => e.target.value.length < 3 && myProps.setNumOfPeople(e.target.value)}
              onClick={() => myProps.setNumOfPeople(null)}
            />
            <p style={{display: myProps.valid ? "none":"block"}}>Can&apos;t be zero</p>
          </div>
        </div>
      </form>
    </article>
  );
}

export default FormPanel
