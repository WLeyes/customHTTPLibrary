console.log('Connected to app.js');
/**
 *  Custom HTTP Library
 *  Library for making HTTP requests
 * 
 *  @version 3.0.0
 *  @author Warren Leyes
 *  @license MIT
 *  
 **/

 class customHTTP {
  // HTTP GET request 
  async get(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
  }
 


 // HTTP POST request
 async post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }



  // HTTP PUT request
  async put(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  return responseData;
}



    // HTTP Delete request
    async delete(url) {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        });
        const responseData = 'Resource Deleted...';
        return responseData;
      }
} // end customHTTP class

