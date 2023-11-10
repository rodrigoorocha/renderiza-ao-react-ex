import React, { Component } from "react";
export default class Form01 extends Component {
  render() {
    return (
      <div className="flex">
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <form className="form" action="">
          <label>1. Qual o seu nome?</label>
          <input type="text" />
          <label>2. Qual sua idade?</label>
          <input type="text" />
          <label>3. Qual seu email?</label>
          <input type="text" />

          <label>4. Qual a sua escolaridade?</label>
          <select name="cars" id="cars">
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
            <option value="ddd">ddd</option>
          </select>
        </form>
      </div>
    );
  }
}
