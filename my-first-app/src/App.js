import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css'
import './components/Hello'
import Hello from "./components/Hello"
import Clock from "./components/Clock"
class App extends Component {
    cars = [
        {make:'Opel',model:'Astra'},
        {make:'Volkswagen',model:'Golf'},
        {make:'Peugeot',model:'206'}
    ]
    myCarsElement = this.cars.map((car)=>(
        <div >{car.make} - {car.model}</div>
    ))
    render() {
        return (
            <div className="App">
                {this.myCarsElement}
                <Hello name='Ivan'/>
                <Clock/>
            </div>
        );
    }
}

export default App;
