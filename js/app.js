const http = new customHTTP;

// GET Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));



// User Data
const data = {
  name: 'John Doe',
  username: 'johnDoe',
  email: 'jDoe@aol.com'
}



// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));



// Update user
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(error => console.log(error));