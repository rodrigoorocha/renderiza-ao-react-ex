import React, { Component } from "react";
import "./App.css";
import Form01 from "./pages/Form01";
import Form02 from "./pages/Form02";
import FormEnd from "./pages/FormEnd";
import Form03 from "./pages/Form03";
export default class App extends Component {
  state = {
    page: 1,
  };

  renderizarComponente = () => {
    switch (this.state.page) {
      case 1:
        return <Form01 />;
      case 2:
        return <Form02 />;
      case 3:
        return <Form03 />;
      case 4:
        return <FormEnd />;
      default:
        <></>;
    }
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    return (
      <>
        {this.renderizarComponente()}
        <button onClick={this.nextPage}> Proxima etapa</button>
      </>
    );
  }
}
