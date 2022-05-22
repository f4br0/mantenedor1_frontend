import React, { useContext, useState } from "react";
import { Bike } from "../../context/bike";


export default ({ field }) => {
  const { state, dispatch } = useContext(Bike);
  const [value, setValue] = useState("");


  const onChange = (e) => {
    setValue(e.target.value)
    dispatch({ key: field, payload: e.target.value });
    // dispatch({ type: 'FILTER' });
  }

  return (

    <input
      data-testid="input-data-title"
      className="form-control"
      value={value}
      autoFocus={true}
      placeholder="Title"
      onChange={onChange}
    />
  )
}
