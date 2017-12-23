import React from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import './css/App.css';
import BookList from './components/BookList';

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
    console.log(this.state.books);
    
    return (
      <div className="app">
          <Route
            exact
            path="/"
            render={()=>(
              <BookList
                books={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                }}
              />
            )}
          />
</div>
    )
  }
}

export default BooksApp
