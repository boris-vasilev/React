/**
 * Created by boris on 7/21/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import data from '../Data'
export default class AuthorsAll extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            orderBy: 'Asc',
            authors: []
        }
        this.sortAuthors = this.sortAuthors.bind(this)
    }

    componentDidMount() {
        data.getAuthors().then(authors => {
            authors = authors.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({
                authors: authors
            })
        })
    }

    sortAuthors() {
        let authors = this.state.authors
        let nextSort
        if (this.state.orderBy === 'Asc') {
            authors = authors.sort((a, b) => b.name.localeCompare(a.name))
            nextSort = 'Desc'
        } else {
            authors = authors.sort((a, b) => a.name.localeCompare(b.name))
            nextSort = 'Asc'
        }

        this.setState({
            orderBy: nextSort,
            authors: authors
        })
    }

    render() {
        let authors = this.state.authors.map((author, index) => {
            return (
                <Link to={`/authors/${author.id}`} key={index}>
                    <div className='author'>
                        <img src={author.image} alt='author'/>
                        <h3>{author.name}</h3>
                    </div>
                </Link>
            )
        })
        return (
            <div className='authors'>
                <h2>All authors:
                    <button onClick={this.sortAuthors}>
                        {this.state.orderBy === 'Asc' ? 'Desc' : 'Asc'}
                    </button>
                </h2>
                {authors}
            </div>
        )
    }
}