# My Reads

A bookshelf app that allows user to select and categorize books that you  are currently reading, have read, or want to read. 

The project is built using React .It uses an API  provided by Udacity to fetch books data .

## Loading the App

The project uses Node.js and the Create-React-App starter.  If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app
```
git clone https://github.com/TechnicalDev/myreadsapp-react.git
npm install
```
Once all of the dependencies have been installed you can launch the app with
```
npm start
```

A new browser window should automatically open displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## About the App

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
Currently Reading
Want to Read
Read

Each book has a control that lets the user move a book from one shelf to another book. 

The main page also has an "Add" button to search and add books to a shelf.Clicking on the "Add" button redirects the user to the search page which has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 

The search page has a back arrow, which leads back to the main page.When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.