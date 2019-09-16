# React-Redux-Flowers

**Objectives**
1. Present on a single page a list of all users in a data store
2. The list will display the users' first and last names
3. On click of the users' first and last names from the list, display the following below the list of users:
  a. first name
  b. last name
  c. date of birth
  d. current location
  e. description


**Tech stack**
1. React
2. Redux
  a. Required: Use Redux Sagas to handle the data for the backend endpoint that serves the user list
3. Jest for unit testing
4. Express
5. MongoDB with Mongoose

**Application start-up instructions**
1. run `npm install` to install dependencies and dev dependencies
2. run `npm run seed` to seed the database with sample user data
3. run `npm run build` to run webpack and generate the bundle
4. run `npm start` to start the Express server and serve the bundle