# Social Media API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
The Social Network API provides a platform for users to create, update, and delete their profiles, share their thoughts, react to other users' thoughts, and manage their friend lists.

Walkthrough Video: [https://drive.google.com/file/d/1EHnZ9e887nWJKDsMnKfoyHtp1wtx3ty3/view](https://drive.google.com/file/d/1EHnZ9e887nWJKDsMnKfoyHtp1wtx3ty3/view)

## Table of Contents
- [Functionality](#functionality)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Functionality:
* User Management: Users can create, update, and delete their profiles. They can also manage their friend lists by adding or removing friends.

* Thought Sharing: Users can post their thoughts on the platform. They can also edit or delete their own thoughts.

* Reaction System: Users can react to thoughts posted by others. They can express their feelings through reactions such as like, love, or laugh.

## Features:
* Server Initialization: The application can be initialized by seeding the local database with sample data using the command npm run seed.

* Server Start: Once the database is seeded, the server can be started by running npm start. The server runs on port 3001 by default, and the MongoDB database server runs on port 27017.

* API Endpoints: The API provides various endpoints for performing CRUD (Create, Read, Update, Delete) operations on users, thoughts, reactions, and friend lists. These endpoints can be accessed from localhost:3001.

## Installation
Ensure that a local MongoDB server is installed, along with an API testing application like Insomnia. Afterward, clone the GitHub repository and execute 'npm install' from an integrated terminal to install the application and its dependencies on your local machine.

## Usage
POST, PUT, and DELETE Routes
You can test the POST, PUT, and DELETE routes in Insomnia to create, update, and delete users and thoughts in the database.

POST:
* Users: /api/users
* Thoughts: /api/thoughts

PUT:
* Users: /api/users/:userId
* Thoughts: /api/thoughts/:thoughtId

DELETE:
* Users: /api/users/:userId
* Thoughts: /api/thoughts/:thoughtId

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


