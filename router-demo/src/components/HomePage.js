/**
 * Created by boris on 7/16/2017.
 */
import React,{Component} from 'react'
class HomePage extends Component{
    constructor(props){
        super(props)
        this.redirectToAbout = this.redirectToAbout.bind(this)
    }
    redirectToAbout(){
        this.props.history.push('/about')
    }
    render(){
        return(
            <div>
                <h1>Hello from Home page</h1>
                <div>
                    <button onClick={this.redirectToAbout}>Go to about</button>

                </div>
            </div>
        )
    }
}
export default HomePage