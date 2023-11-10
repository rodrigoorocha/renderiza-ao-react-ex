import React, { Component } from "react";

export default class Form03 extends Component {
  render() {
    return (
      <div className="flex">
        <h1>ETAPA 3 - DADOS GERAIS</h1>

        <form className="form" action="">
          <label>5. Por que você não terminou um curso de graduação?</label>
          <input type="text" />

          <label>6. Você fez algum curso complementar?</label>
          <select name="cars" id="cars">
            <option value="xxx">xxx</option>
            <option value="yyy">yyy</option>
          </select>
        </form>
      </div>
    );
  }
}
