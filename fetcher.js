let CmdArgs = process.argv.slice(2);

//user input
url = CmdArgs[0];
querySearch = CmdArgs[1];

console.log(`${url}${querySearch}`);

const request = require("request");

request(`${url}${querySearch}`, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});