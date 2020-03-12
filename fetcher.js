const request = require("request");
const fs = require("fs");


let cmdArgs = process.argv.slice(2);

//user input
url = cmdArgs[0];
querySearch = cmdArgs[1];

const writeToFile = (error, response, body) => {
   fs.writeFile(querySearch, body, () => {
    fs.stat(querySearch, (err, stats) => {
      console.log(`Downloaded and saved ${stats.size} bytes to ${querySearch}`);  
    })
  })
}

request(`${url}`, writeToFile)

// request(`${url}${querySearch}`, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
  
//   fs.writeFile('info.txt', body )
// });


// console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

// fs.open("info.txt", "r+", (err, fd) => {  
//   if (err) throw err;  
//   fs.write(fd, request, 0, "utf8", (err, written, string) => {  
//     console.log(err, written, string);  
//     fs.close(fd, err => {  
//       if (err) throw err;  
//     });  
//   });

//   console.log(`Downloaded and saved ${written} bytes to ${cmdArgs[1]}`);
//   return `Downloaded and saved ${written} bytes to ${cmdArgs[1]}`;  
// });

// Use the request library to make the HTTP request - ok
// Use Node's fs module to write the file
      // fs.write(path, type);
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)
// should log - Downloaded and saved 1235 bytes to ./index.html.



// // ORIGINAL
// const fs = require("fs");
// fs.open("./files/file.txt", "r+", (err, fd) => {  
//   if (err) throw err;  
//   fs.write(fd, "abc", 0, "utf8", (err, written, string) => {  
//     console.log(err, written, string);  
//     fs.close(fd, err => {  
//       if (err) throw err;  
//     });  
//   });  
// });