/**
 * Created by boris on 7/21/2017.
 */
import React from 'react'
import data from '../Data'
export default class BookDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            book: {},
            author: {},
            comments: []
        }
    }
    componentDidMount(){
        data.getBookById(this.props.match.params.id).then(book=>{
            data.getAuthorByBook(book.id).then(author=>{
                data.getCommentsByBook(book.id).then(comments=>{
                    this.setState({
                        book:book,
                        author:author,
                        comments:comments
                    })
                })
            })
        })
    }
    render(){
        let book = this.state.book
        let author = this.state.author
        let commentNodes = this.state.comments.map(comment=>{
            return(
                <div>
                    Comment: {comment.message}
                </div>
            )
        })
        return(
            <div>
                <h1>Book {this.state.book.id} Details page</h1>
                <h2>Book name: {book.title}</h2>
                <img src={book.image} alt='cover' />
                <div>Author: {author.name}</div>
                <div>Creation date: {book.date}</div>
                <div>Price: {book.price}</div>
                {commentNodes}
            </div>
        )
    }
}