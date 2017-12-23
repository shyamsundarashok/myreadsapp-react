import React from 'react';
import { PropTypes } from 'prop-types'
import './../css/Book.css';

class Book extends React.Component {

    static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
    }

    changeShelf = (event) => {
         if(event.target.value.length===0)
             return;
         this.props.onShelfChange(event.target.value)
    }

    render()
    {
          var actions = [
            {value:"moveTo",name:"Move to..."},
            {value:"currentlyReading",name:"Currently Reading"},
            {value:"wantToRead",name:"Want to Read"},
            {value:"read",name:"Read"},
        ];
        var currentShelf = this.props.book.shelf;
        var options = actions
        .filter(function(action) { 
            return action.value !== currentShelf; 
        })
        .map(function(action){
          return (
              <option value={action.value} key={action.value}>{action.name}</option>
          )
        });

        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, 
                        height: 193,
                        backgroundImage: "url("+this.props.book.imageLinks.thumbnail+")"}}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={this.changeShelf}>{options}</select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {
                    this.props.book.authors && this.props.book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                ))}
                </div>
            </li>
        );
    }
}

export default Book