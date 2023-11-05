# Project description:
Developed a full-stack web application that allows users to create and manage sticky notes, and collaborate with other users. It is made with Node.Js, EJS & MongoDB.

# Features:

## Frontend:
• Login functionality using username and password.

• Admins can invite new users via an invite link.

• Users can create, edit, and delete their notes.

• User's homepage shows all their notes as well as public notes of other users.

• Users can only see notes of other users which are marked as "public".

• Admin have the ability to view, add, edit, and delete all notes.

• Users can search any note based on title or description.

• Created a user-friendly and responsive user interface.

## Backend:
• Developed a RESTful API to handle user registration and authentication.

• Implemented API endpoints for creating, updating, and deleting notes.

• The notes have a privacy setting (public or private).

• Admins have elevated permissions and can manage users and notes.

• Implemented user roles and role based access control (RBAC).

# Project demo:
https://youtu.be/K0CAxCc0Q-0

# Instructions to run:
 
## You need:
- Database (MongoDB)
- Google Console Account to create the API Auth Key's

## Create .env file
Create a .env file to store your credentials. Example below:
```
MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
GOOGLE_CLIENT_ID= YOUR_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET= YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback
```
## Installation
To install and run this project - install dependencies using npm and then start your server:
```
$ npm install
$ npm start
```
