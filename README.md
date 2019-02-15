## Booksy

An application used to search for books and add them to a users' personal library. 

The application was created with CodeSandbox, built with React and Redux and is hosted on netlify. Book data is accessed from the [Google Books API](https://developers.google.com/books/).

Visit the application [here](https://booksy.netlify.com/home).

## Project Screen Shots

![Search](https://duaw26jehqd4r.cloudfront.net/items/351044013f0G1y2v0W33/Image%202019-02-13%20at%206.34.48%20PM.png)
![Book](https://duaw26jehqd4r.cloudfront.net/items/0E0Z3L3j3n0w3E2J2Z1d/Image%202019-02-15%20at%2010.56.10%20AM.png)
![Web](https://duaw26jehqd4r.cloudfront.net/items/2b3r2N0a3d33221T3U0f/Image%202019-02-15%20at%2010.55.14%20AM.png)

## Reflection  

The primary goal of this project was to practice using React, Redux and React Router in an idiomatic way. The secondary goal was to practice styling in CSS, so all components were styled in vanilla CSS. The project took about a week from the first sketch to deployment.

I wanted to create a simple application where users could search for books, add them to a library and be able to check them off like a to-do list. 

To start off, I sketched how the application should look on mobile and desktop, and planned the features I wanted to include in the application. I used CodeSandbox so I could focus my effort on developing the application and minimize setup time.

After planning, I started by laying out and styling the components. I took inspiration from [Google](https://www.google.com/) and [Penguin Books](https://www.penguin.co.uk/). Next, I set-up the routes using `react-router` and managed the application state using `redux`. Finally, I used `redux-persist` to save the users' list of saved books into the application state as an alternative to setting up a backend.

One feature I planned was to have the books matching the search term to display as the user is typing. However, that would mean a whole lot of GET request sent to the Google Books server which would exceed my daily limit.

The main challenge I ran into was state management. Initially, I wanted to store the list of library books in a `byIds` object with the book IDs as the keys and the book data as the values. However, I settled on saving them in an array since I had no need to filter the books by IDs and I could filter them by their completed/unread status instead. 

The main takeaways for this project was that I should spent more time planning the state of my application before diving into creating my actions and reducers. 

In my next project, I plan to use firebase to set up authentication features as well as to store and manage my application data to get a better understanding of the backend processes.

The main libraries I used for this project include the following: 
* `react`
* `redux`
* `react-router`
* `redux-thunk`
* `redux-persist`
* `@fontawesome` for svg icons

## Resources

The following are the main documentation and videos I referred to for this project:
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/introduction/getting-started)
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
