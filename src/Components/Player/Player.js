import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
   
    const {name, age, img, salary} = props.info;
    return (
        <div className="d-flex bg-light rounded-3 shadow m-2 border">
            <div className="col-4 m-1 p-2">
                <img src={img} alt="" style={{height:"130px", width:"100%"}}/>
            </div>
            <div className="col-8 m-1 p-2">
                <h4>{name}</h4>
                <h6>Age: {age}</h6>
                <h6>Salary: ${salary}</h6>
                <button className="btn btn-outline-dark" onClick={props.handleAddButton}><FontAwesomeIcon icon={faPlusCircle} /> Add to eleven</button>
            </div>
        </div>
    );
};

export default Player;