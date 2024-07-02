# Volunteer Website Server

This repository contains the server-side code for the Volunteer Management Website.

## Description

The server-side of the Volunteer Management Website is designed to handle all backend operations including user authentication, data storage, and API endpoints. It aims to provide a scalable and efficient solution for managing volunteers.

## Features

- **User Authentication**: Registration, login, and logout functionality.
- **Volunteer Data Management**: Add, update, and delete volunteer information.
- **Secure API Endpoints**: Ensuring secure data transactions between client and server.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token) for authentication

## Repository Link

- [Client Repository](https://github.com/saagor16/B9A11-Cline-Volunter)

## API Endpoints

- **POST /api/register**: Register a new user
- **POST /api/login**: Login a user
- **POST /api/logout**: Logout a user
- **GET /api/volunteers**: Get a list of all volunteers
- **POST /api/volunteers**: Add a new volunteer
- **PUT /api/volunteers/:id**: Update volunteer information
- **DELETE /api/volunteers/:id**: Delete a volunteer
