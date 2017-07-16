/**
 * Created by boris on 7/16/2017.
 */
import React from 'react'
import {Link} from 'react-router'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mostRecentMovies:[]
        }
        this.getFiveRecentMovies = this.getFiveRecentMovies.bind(this)
    }
    componentDidMount(){
        this.getFiveRecentMovies()
        this.interval = setInterval(()=>this.getFiveRecentMovies(),30000)
    }
    componentWillMount(){
        clearInterval(this.interval)
    }
    getFiveRecentMovies(){
        let request = {
            method:'get',
            url:'/api/movies/five-recent'
        }
        $.ajax(request)
            .done(data=>{
                this.setState({
                    mostRecentMovies: data
                })
            }
        )
            .fail(err=>toastr.err(err.responseJSON.message))
    }
    render(){
        let mostRecentMovies = this.state.mostRecentMovies.map(movie =>{
            return(
                <li key={movie._id}>
                    <Link to={'/...'}>{movie.name}</Link>
                </li>
            )
        })
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3 className="lead">
                                <strong>Information</strong> and
                                <strong> Copyright</strong>
                            </h3>
                            <p>
                                Powered by
                                <strong> Express</strong>,
                                <strong> MongoDB</strong> and
                                <strong> React</strong>
                            </p>
                            <p>&copy; Boris Vasilev.</p>
                        </div>
                        <div className="col-sm-4 hidden-xs">
                            <h3 className="lead">
                                <strong>Newest</strong> 5 Movies
                            </h3>
                            <ul className="col-sm-3">
                                <h3 className="lead">Author</h3>
                                <a href="https://github.com/boris-vasilev">
                                    <strong>Boris Vasilev</strong>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer