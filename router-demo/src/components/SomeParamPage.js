/**
 * Created by boris on 7/16/2017.
 */
import React,{Component} from 'react'
class SomeParamPage extends Component{
    render(){
        let params = this.props.match.params
        let id = params.id
        let name = params.name
        return(
            <div>Parameter {id} {name}</div>
        )
    }
}
export default SomeParamPage