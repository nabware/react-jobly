# Jobly Frontend

Jobly is a full stack web application of a mock job board site where users can create an account and login. Logged in users can browse through a list of companies and/or jobs with the ability to filter the list using the search bar. Each company has a list of job openings that a user can view and/or apply to. 

# Table of Contents
1. [Features](#Features)
2. [Tech stack](#Tech-stack)
3. [React Component Hierarchy](#React-component-hierarchy)
4. [Install](#Install)
6. [Deployment](#Deployment)

## Features<a name="Features"></a>:
* Logged out users have the option to sign up for an account. Authentication is manged by the backend. 
* Logged in users have access to view companies and jobs, apply for jobs, and the option to update their profile.
* Users can apply and unapply for jobs to keep track of application status.
* Search fields are available for users to filter through companies/jobs. 
* Token stored on localStorage so that a user is not automatically logged out upon page refresh.
* Alerts are displayed to the user when signing up for an account and editing the user profile if minimum requirements are not met.


## Tech stack<a name="Tech-stack"></a>: 

### Backend ([GitHub Repo](https://github.com/nabware/express-jobly)):
![alt text](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)
![alt text](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)

### Frontend:
![alt text](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

### Database Management: 
![alt text](https://img.shields.io/badge/-PostgresSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)

## React Component Hierarchy<a name="React-component-hierarchy"></a>: 
![alt text](https://github.com/amathew195/react-jobly/blob/main/public/Images/ReactComponentHierarchy.jpeg?raw=true)

## Install<a name="Install"></a>: 

This project uses Node.js for the back-end JavaScript runtime environment. To install the backend dependencies from the package.json file:
    
    npm install

To start the sever (port 3000):

    npm start

## Deployment<a name="Deployment"></a>:

### Frontend Deployment: 
We used Surge to deploy our front end. 

First make sure Surge is installed: 

    npm install -g surge

Next, let’s make sure we define the environment variable for our frontend app.

    REACT_APP_BASE_URL=YOUR_RENDER_BACKEND_URL npm run build

Now build your frontend.
    
    cp build/index.html build/200.html
    surge build 
