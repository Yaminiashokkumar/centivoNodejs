# Node.js Express API with MongoDB

## Overview

This API retrieves a user from a MongoDB database based on the provided ID. It ensures that only users older than 21 are returned. If the ID format is invalid or no matching user is found, appropriate error responses are sent.

## Setup Instructions

1. Clone the repository
2. Install dependencies using `npm install`
3. Set up the `.env` file with `MONGO_URI`
4. Run `node index.js`
5. Test with `/users/:id`

## Features

- Express-based API
- MongoDB data storage with Mongoose
- Filters users based on age > 21
- Graceful error handling
