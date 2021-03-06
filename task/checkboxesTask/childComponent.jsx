import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value} - {props.name}
      </li>
    )
}

export default CheckBox;
