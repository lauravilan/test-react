import ReactDOM from "react-dom";
import React from "react";
import Prueba from "./PruebaJS";

class App extends React.Component {
    render() {
        return <div>
        <h3>laura</h3>
        <Prueba items={["mazda","renault"]}></Prueba>
        <Prueba items={[20,36,50]}></Prueba>

        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));