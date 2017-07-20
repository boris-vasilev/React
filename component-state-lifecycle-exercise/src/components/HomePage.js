/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import data from '../Data'
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books:[]
        }
    }
    componentDidMount(){
        data.getBooks().then(books=>{
            console.log(books)
            books = books.sort((a,b)=> new Date(b.date) - new Date(a.date)).slice(0,6)
            let authorsPromises=[]
            for (let book of books){
                authorsPromises.push(data.getAuthorByBook(book.id))
            }
            console.log(authorsPromises)
            Promise.all(authorsPromises).then(authors=>{
                console.log(authors)
                for(let book of books){
                    for(let author of authors){
                        if (author.books.indexOf(book.id) > -1) {
                            book.authorName = author.name
                        }
                        this.setState({
                            books:books
                        })
                    }
                }
            })
        })
    }
    render () {
        let bookNodes = this.state.books.map(b => {
            return (
                <div className='book' key={b.id}>
                    <Link to={`/books/${b.id}`}>
                        <img src={b.image} alt='cover' />
                        <h3>{b.title}</h3>
                    </Link>
                    <p>Author: <Link to={`/authors/${b.author}`}>{b.authorName}</Link></p>
                </div>
            )
        })

        return (
            <div>
                {bookNodes}
            </div>
        )
    }
}
export default HomePage