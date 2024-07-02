# Volunteer Website Server

**Live Site URL:** [Volunteer](https://b9a11-volun.web.app)

## Repository Links

- [Client Repository](https://github.com/saagor16/B9A11-Cline-Volunter)
- [Server Repository](https://github.com/saagor16/B9A11-Server-Volunter)

## Description

This repository contains the server-side code for the Volunteer Management Website. It manages user authentication, volunteer data, and provides secure API endpoints for efficient communication with the client-side application.

## Features

- **User Authentication**: Register, login, and logout functionalities with secure handling of user sessions.
- **Volunteer Data Management**: CRUD operations for managing volunteer information.
- **Secure API Endpoints**: Utilizes JWT for authentication to secure endpoints and manage user access rights.

## Technologies Used

- [Node.js](https://nodejs.org/): Server-side JavaScript runtime environment.
- [Express.js](https://expressjs.com/): Fast, minimalist web framework for Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Cloud-hosted MongoDB database service for data storage.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js, providing schema-based solutions.
- [JWT (JSON Web Token)](https://jwt.io/): Token-based authentication for secure communication between client and server.

## Installation and Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saagor16/B9A11-Server-Volunter.git
  ```
2. Navigate to the project directory:
    ```bash
    cd B9A10-Server-Side-Art-Cruft
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables in a `.env` file:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_atlas_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm start
    ```
