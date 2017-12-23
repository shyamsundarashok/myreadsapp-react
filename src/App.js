import React from 'react';
import { Route,Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import './css/App.css';
import BookList from './components/BookList';
import SearchPage from './Search'

class BooksApp extends React.Component {

  state = {
    books: []
  };

  componentDidMount() {
      this.fetchMyBooks();
  }

  fetchMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  changeShelf = (id,shelf) => {
    BooksAPI.update({id},shelf).then(()=>{
      this.fetchMyBooks()
    })
  }

  render() {   
    return (
      <div className="app">
          <Route path="/search" render={( { history }) => (
            <SearchPage
                myBooks={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                  history.push('/')
                }}
            />
          )} />
          <Route exact path="/" render={()=>(
            <div className="list-books">
                 <BookList
                  books={this.state.books}
                  onShelfChange={(id,shelf)=>{
                    this.changeShelf(id,shelf)
                  }}
                />
                <div className="open-search">
                    <Link to="/search">Search</Link>
                </div>
            </div>              
            )}
          />
</div>
    )
  }
}

export default BooksApp
