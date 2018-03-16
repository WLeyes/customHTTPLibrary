function customHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
customHTTP.prototype.get = function(url, callback) { // future projects refer to callback as cb
  this.http.open('GET', url, true);

  let self = this; // as workaround for lexacil arrow function =>
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`); // todo: add case for friendly error names
    }
  }
  this.http.send();
}

// Make an HTTP POST Request
customHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
} 

// Make an HTTP PUT Request
customHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
customHTTP.prototype.delete = function(url, callback) { 
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback(`Error: ${self.http.status}`); // todo: add case for friendly error names
    }
  }
  this.http.send();
}