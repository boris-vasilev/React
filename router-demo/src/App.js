import React, {Component} from 'react'
import './App.css'
import Routes from './Routes'
import Header from './components/Header'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default App
