import React from "react";
import '../stylesheets/Button.css'

function Button(props){

    const esOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };


    return(
        <div className={`container-button ${esOperator(props.children) ? 'Operator' : ''}`.trimEnd()}
        onClick={() => props.handleclick(props.children)}>
           {props.children} 
        </div>
    );
}

export default Button;