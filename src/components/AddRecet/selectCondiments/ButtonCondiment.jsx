import React from 'react';


const ButtonCondiments = (props) => {

  return (
        <button className="buttonCondiments" onClick={props.onClick}  key={props.key}>
            <span>{props.item} </span>
        </button>
  );
};

export default ButtonCondiments ;
