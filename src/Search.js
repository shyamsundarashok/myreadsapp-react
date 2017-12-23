import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './BooksAPI'


import BookShelf from './components/BookShelf'

export default class SearchPage extends Component {

    state = {
        books: [],
        query: ''
    }

    static propTypes = {
        myBooks: PropTypes.array,
        onShelfChange: PropTypes.func.isRequired
    }

    mergeBooks = (booksData,myBooksData) => {
        return booksData.map((item)=>{
            myBooksData.forEach((Item)=>{
            if(Item.id === item.id){
                item.shelf = Item.shelf;
                return;
            }
            })
            return item;
        })
    }

    searchBooks = (event) => {
        const value = event.target.value.trim()
        this.setState({query: value})
        this.searchData(value)
    }

    searchData = (value) => {
        if (value.length !== 0) {
            BooksAPI.search(value, 10).then((books) => {
            if(books.length>0){
                books = books.filter((book)=>book.imageLinks)
                books = this.mergeBooks(books,this.props.myBooks)
                this.setState({books})
            }
            else{
                this.setState({books: []})
            }
            })
        } else {
            this.setState({books: [], query: ''})
        }
    }    

    render() {
    const books = this.state.books
    const query = this.state.query
    return (
        <div>
        <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.searchBooks}
                />
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid"></ol>
            </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<BookShelf title="Search Results" books={books} onShelfChange={(id, shelf) => {
            this.props.onShelfChange(id, shelf)
        }}/>)}
        </div>
    )
    }
}