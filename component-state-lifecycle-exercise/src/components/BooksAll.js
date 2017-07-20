/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import data from '../Data'
export default class BooksAll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        data.getBooks().then(books => {
            let authorsPromises = []
            for (let book of books) {
                authorsPromises.push(data.getAuthorByBook(book.id))
            }
            Promise.all(authorsPromises).then(authors => {
                for (let book of books) {
                    for (let author of authors) {
                        if (author.books.indexOf(book.id) > -1) {
                            book.authorName = author.name
                        }
                    }
                }
                this.setState({
                    books: books
                })
            })
        })

    }

    sortByTitle() {
        this.setState(prevState => {
            books:prevState.books.sort((a, b) => a.title.localeCompare(b.title))
        })
    }

    sortByDate() {
        this.setState(prevState => {
            books:prevState.books.sort((a, b) => new Date(a.date) - new Date(b.date))
        })
    }

    sortByAuthor() {
        this.setState(prevState => {
            books: prevState.books.sort((a, b) => a.authorName.localeCompare(b.authorName))
        })
    }
    render(){
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
        return(
            <div>
                <h1>All Books:</h1>
                <p>Sort:
                    <button onClick={this.sortByDate.bind(this)}>Date</button>
                    <button onClick={this.sortByAuthor.bind(this)}>Author</button>
                    <button onClick={this.sortByTitle.bind(this)}>Title</button>
                </p>
                {bookNodes}
            </div>
        )
    }
}