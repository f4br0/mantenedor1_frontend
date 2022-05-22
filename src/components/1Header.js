import React from "react";
import Input from "./shared/Input";

export default () => (
  <div className="row">
    <div className="col-md-4">
      <h4>More Activity</h4>
    </div>
    <div className="col-md-4">
      <Input field={['search', 'header']} />
    </div>
    <div className="col-md-2 offset-md-2">
      <button>Carrito</button>
    </div>
  </div>
);
