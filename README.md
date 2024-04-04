# Notes MERN App

This is a simple Notes app designed for managing notes with ease. The app is built using the MERN (MongoDB, Express, React, Node.js) stack and supports essential CRUD (Create, Read, Update, Delete) operations. It utilizes MongoDB for database management, Express and Node.js for server-side functionality, and React for a dynamic front-end user experience.

<!-- Tutorial Guide: [Create a MERN CRUD App (YouTube/CodingWithRobby)](https://www.youtube.com/playlist?list=PL-LRDpVN2fZA-1igOQ6PDcqfBjS-vaC7w) -->

## Branches

    - main: frontend has no redux or components, everything is in App.js
    - notes-app-with-redux: frontend is separated into components and uses redux toolkit to manage global state.
    - notes-app-with-redux-and-auth: same as above branch but implemented auth & styling into the frontend.

## Getting Started

This project is divided into two main parts: the backend and the frontend. Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js
- MongoDB

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/notes-mern-app.git
   ```

3. Navigate to the cloned repository's root directory

   ```bash
   cd notes-mern-app
   ```

### Setting up the Backend

1. From the root directory, navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Create a .env file in the backend directory and add the following:

   ```env
   PORT=3001
   MONGODB_URI=<Your MongoDB connection string>
   SECRET=<Your JWT secret key>
   ```

4. Start the backend:

   ```bash
   npm run dev
   ```

   The backend should now be running on `http://localhost:3001`.

### Setting up the Client

1. Open a new terminal or command prompt window.

2. From the root directory, navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. Start the frontend:

   ```bash
   npm run start
   ```

   The frontend should now be running on `http://localhost:3000`.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3000` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.

## Backend

The backend provides a REST API for managing notes & users. Here are the available endpoints:

    - GET /api/notes - Get all notes
    - GET /api/notes/:id - Get a single note by ID
    - POST /api/notes - Create a new note
    - PUT /api/notes/:id - Update an existing note by ID
    - DELETE /api/notes/:id - Delete a note by ID

    - POST /api/auth/signup - Register a new user
    - POST /api/auth/login - Login a user
    - GET /api/auth/logout - Logout a user
    - GET /api/auth/check-auth - Endpoint to check if user is authenticated

The API requires user authentication with JSON Web Tokens (JWT). To authenticate a user, send a `POST` request to `/api/auth/login` with a JSON body containing the `email` and `password` fields. The server will respond with a JWT, which should be included in subsequent requests to protected endpoints.

## Frontend

The app provides the following features:

    - View a list of notes
    - Create a new note
    - Update a note
    - Delete a note
