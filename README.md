# MERN Blog Project

![License](https://img.shields.io/badge/license-MIT-blue.svg)
# FEATURES OF MY APP
# HOME PAGE 
![image](https://github.com/user-attachments/assets/43afd003-141a-46f4-a391-535eebbe0b80)

# DARK MODE ALSO
![image](https://github.com/user-attachments/assets/7fe6cb46-3f73-4b6d-bf8f-7ec8fb5c4a05)

# RECENT POSTS
![image](https://github.com/user-attachments/assets/d9d70572-8539-4bb7-9217-5f3416942b7a)

# ADMIN FUNCITONALITY
![image](https://github.com/user-attachments/assets/190d9f72-f494-4546-98a1-4f7b67d6e9a3)

# ADMIN DASHBOARD
![image](https://github.com/user-attachments/assets/c79f3ac0-d8bb-4495-a910-eb8721dd144a)

# COMMENT SECTION
![image](https://github.com/user-attachments/assets/23f921e9-b0b8-4f6a-b61d-9650bdc6b216)

# USERS SECTION
![image](https://github.com/user-attachments/assets/a8bb2793-5db7-4eaa-bffb-9709a120efa6)

# PROJECTS
![image](https://github.com/user-attachments/assets/dbebf1a2-f432-41ad-85f4-47ad2b0869fd)

# AUTHENTICATION FUNCTIONALITY
![image](https://github.com/user-attachments/assets/5ee4bd31-6328-4630-bb1f-13febb99ed20)

# CREATE POST
![image](https://github.com/user-attachments/assets/87c45e56-9707-4784-9a27-493d91ad252f)

# COMMENTS POST AND DELETE FUNCTIONALITY
![image](https://github.com/user-attachments/assets/cc8ad611-aa31-40e7-b0b4-f53b351579ef)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This is a blog site built using the MERN stack (MongoDB, Express, React, Node.js) with Redux.
It includes admin functionality for managing posts and users, CRUD operations for posts and comments, JWT authentication, and is deployed on Render.

## Features

- User authentication with JWT
- Admin panel for managing posts and users
- CRUD operations for posts and comments
- Responsive design
- State management with Redux

## Tech Stack

- **Frontend**: React, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Render

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/SidharthVerma-tech/mern_blog_project/
# Install server dependencies
cd server
npm install
```

# Install client dependencies
```
cd ../client
npm install
```
# USAGE
# Start server
cd server
npm start

# Start client
```
cd ../client
npm start
```
- Open your browser and navigate to http://localhost:3000
# API Endpoints
Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user
Posts
- GET /api/posts - Get all posts
- POST /api/posts - Create a new post
- GET /api/posts/:id - Get a single post by ID
- PUT /api/posts/:id - Update a post by ID
- DELETE /api/posts/:id - Delete a post by ID
Comments
- GET /api/posts/:postId/comments - Get all comments for a post
- POST /api/posts/:postId/comments - Add a comment to a post
- DELETE /api/posts/:postId/comments/:commentId - Delete a comment by ID
Deployment
The project is deployed on Render. You can view the live site here.
[Link Text]https://mern-blog-project-1.onrender.com

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)
Open a pull request

Sidharth Verma - [Link Text]sidharthverma970647783@gmail.com

Project Link: [Link Text]https://github.com/SidharthVerma-tech/mern_blog_project





