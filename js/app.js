const http = new customHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));

const data = {
  name: 'John Doe',
  username: ' johnDoe',
  email: 'jDoe@aol.com'
}

// Create Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));