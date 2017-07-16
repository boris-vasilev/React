/**
 * Created by boris on 7/15/2017.
 */
import React, {Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props)
        this.state ={
            date:new Date()
        }
        //Setting the tick this to Clock because setInterval will make it Window and it will not work
        this.tick = this.tick.bind(this)
    };
    tick(){
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        this.timer = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <h1>The time is {this.state.date.toLocaleTimeString()}</h1>
        )
    }
}
export default Clock