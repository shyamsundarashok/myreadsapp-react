import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import BookShelf from './BookShelf';

export default class BookList extends Component {

  static propTypes = {
    books: PropTypes.array,
    onShelfChange: PropTypes.func.isRequired
  }


    render(){
      const books = this.props.books
      const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Want to Read' },
                        { type: 'read', title: 'Read'}]
        return(
             <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                  {shelfTypes.map((shelf, index) =>  {
                    const shelfBooks = books.filter( book => book.shelf === shelf.type)
                    return  (
                      <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{ shelf.title }</h2>
                        <div className="bookshelf-books">
                          <BookShelf
                            books={ shelfBooks }
                            onShelfChange={(id,shelf)=>{
                              this.props.onShelfChange(id,shelf)
                            }}
                          />
                        </div>
                      </div> )
                  })}
              </div>
            </div> 
        )
    }
}