/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import BooksAll from './components/BooksAll'
import BookDetails from './components/BookDetails'
let Routes = ()=>(
<Switch>
    <Route path="/books/all" component={BooksAll}/>
    <Route path="/books/:id" component={BookDetails}/>
    <Route path="/" component={HomePage}/>
    </Switch>
)
export default Routes
