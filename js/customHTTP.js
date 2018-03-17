console.log('Connected to app.js');
/**
 *  Custom HTTP Library
 *  Library for making HTTP requests
 * 
 *  @version 2.0.0
 *  @author Warren Leyes
 *  @license MIT
 *  
 **/

 class customHTTP {
  // HTTP GET request 
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
 


 // HTTP POST request
 post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }



  // HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
      });
    }



    // HTTP Delete request
    delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(() => resolve('Resource Deleted...'))
          .catch(error => reject(error));
        });
      }
} // end customHTTP class

