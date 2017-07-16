/**
 * Created by boris on 7/15/2017.
 */
import React, {Component} from 'react'
class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Hello I am {this.props.name}!</h1>
            </div>
        )
    }
}
export default Hello
