# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the user's password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user data.

## Request Body
The request body should be a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string"
}

##Example Request
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'

Example Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d6b",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2B7Z4E6y5q5q5q5q5"
  }
}
{
    "fullName": {
        "firstName": "Sushmita",
        "lastName": "Kardam"
    },
    "email" : "test@test.com",
    "password" : "test_password"
}

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user data.

## Request Body
The request body should be a JSON object with the following structure:

```json
{
  "email": "string",
  "password": "string"
}

##Success Response
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string"
  }
}

###Error Response
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
##Response Body
{
  "errors": [
    {
      "msg": "Invalid credentials"
    }
  ]
}
###Example Request
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'

###Example Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d6b",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}