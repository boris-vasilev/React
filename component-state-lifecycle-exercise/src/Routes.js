/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import BooksAll from './components/BooksAll'
import BookDetails from './components/BookDetails'
import AuthorsAll from './components/AuthorsAll'
import AuthorDetails from './components/AuthorDetails'
let Routes = ()=>(
<Switch>
    <Route path="/books/all" component={BooksAll}/>
    <Route path="/books/:id" component={BookDetails}/>
    <Route path="/authors/all" component={AuthorsAll}/>
    <Route path="/authors/:id" component={AuthorDetails}/>
    <Route path="/" component={HomePage}/>
    </Switch>
)
export default Routes
