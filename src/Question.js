import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }
  return (
      <React.Fragment>
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" type="button" onClick={handleShowInfo}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
      </React.Fragment>
  );
};

export default Question;
