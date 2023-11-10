import React, { Component } from "react";

export default class Form02 extends Component {
  render() {
    return (
      <div className="flex">
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <form className="form" action="">
          <label>5. Qual curso?</label>
          <input type="text" />
          <label>6. Qual a unidade de ensino?</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}
