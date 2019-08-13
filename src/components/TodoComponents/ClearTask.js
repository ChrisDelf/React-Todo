import React from 'react';


const ClearButton =  (props) => {
  return (
    <div>
 <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>


    </div>
)


}

export default ClearButton;
