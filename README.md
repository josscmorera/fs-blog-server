# Full Stack Blog App - Backend

Backend of my full-stack blog application.

## Current Features

1. **Get Blogs:** An API endpoint that returns all blog posts.
2. **Create Blogs:** An API endpoint to create a new blog post.
3. **Update Blogs:** An API endpoint to update an existing blog post.
4. **Delete Blogs:** An API endpoint to delete a blog post.

## Tech Stack

- **Express:** The backend server is built using Express.js. It's used for routing and handling API requests.
- **Mongoose:** This is used to model the application data and interact with MongoDB.

## App Structure

The app is structured into several modules, each responsible for a specific part of the application:

- **app.js:** This is the main entry point of the application. It sets up the express server and the middleware.
- **routes/blogs.js:** This module contains the routes for all blog-related operations.
- **models/Blog.js:** This module defines the Blog model using Mongoose.
- **controllers/BlogsController.js:** This module contains the functions to handle requests for blog-related operations.

## How to Run the App

To run the app, you need to do the following:

1. Clone the repository: `git clone url`
2. Install the dependencies: `npm install`
3. Start the app: `npm start`
