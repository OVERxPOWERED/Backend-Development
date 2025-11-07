// => Each express application's entry point file will have this basic syntax

import express from "express"; // This line imports the express module
const app = express(); // Create an instance of express application
const PORT = 3000; // Define the port number where the server will listen, this is usually set in .env file

// Define a route for the root URL ("/")
// Each route/URL must start with a '/'.
app.get("/", (req, res)=>{
    // handle the incoming request and send response
    res.send("Hello World from OVERxPOWERED");
});

// Listening on port 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

// => To run this file, use command: node 3_BasicExpressSyntax.js
// => Then open browser and go to: http://localhost:3000
// => You should see "Hello World from OVERxPOWERED" message in the browser

