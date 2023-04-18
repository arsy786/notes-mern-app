# Notes MERN App (TBC\*)

\*Auth frontend to be complete [Create a MERN CRUD App (5/6) - Adding authentication to our React app (YouTube/CodingWithRobby)](https://www.youtube.com/watch?v=jcckC--ibmM&list=PL-LRDpVN2fZA-1igOQ6PDcqfBjS-vaC7w&index=5)

This is a web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to create, read, update, and delete notes. This project was built following the [Create a MERN CRUD App (YouTube/CodingWithRobby)](https://www.youtube.com/playlist?list=PL-LRDpVN2fZA-1igOQ6PDcqfBjS-vaC7w) playlist on YouTube.

## Branches

    - main: frontend has no redux or components, everything is in App.js
    - notes-app-with-redux: frontend is separated into components and uses redux toolkit to manage global state.
    - notes-app-with-redux-and-auth: same as above branch but implement auth into the frontend.*

## Features

    - Users can create, read, update, and delete notes
    - Notes are stored in a MongoDB database
    - User authentication with JSON Web Tokens (JWT)

## Installation

To install this application, you will need to have Node.js and MongoDB installed on your system.

1. Clone the repository: `git clone https://github.com/arsy786/notes-mern-app.git`
2. Install the dependencies: `cd notes-mern-app && npm install`
3. Set up the environment variables: create a .env file in the root directory with the following variables:

```makefile
PORT=<your Port number>
MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<your JWT secret key>
```

4. Start the server: npm run server

## Usage

Once the server is running, you can access the application at http://localhost:5000.

### Backend

The backend provides a REST API for managing notes. Here are the available endpoints:

    - GET /api/notes - Get all notes
    - GET /api/notes/:id - Get a single note by ID
    - POST /api/notes - Create a new note
    - PUT /api/notes/:id - Update an existing note
    - DELETE /api/notes/:id - Delete a note by ID
    - GET /auth/logout - Logs out user
    - GET /auth/check-auth - Endpoint to check if user is authenticated (makes use of auth middleware and requires user to be logged in and have JWT token)
    - POST /api/users/register - Register a new user
    - POST /api/users/login - Authenticate a user

The API requires user authentication with JSON Web Tokens (JWT). To authenticate a user, send a `POST` request to `/api/users/login` with a JSON body containing the `email` and `password` fields. The server will respond with a JWT, which should be included in subsequent requests to protected endpoints.

### Frontend

The app provides the following features:

    - View a list of notes
    - Create a new note
    - View the details of a note
    - Update a note
    - Delete a note

Note: The app requires the backend server to be running in order to work properly.
