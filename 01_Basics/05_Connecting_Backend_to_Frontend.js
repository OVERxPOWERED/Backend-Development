// Refer 3_Project
// To understand how to connect backend to frontend

// API - Application Programming Interface
// - The main thing that connects frontend to backend is the api.
// - The backend server data which is consumed by the frontend.

// CORS - Cross-Origin Resource Sharing
// - This method is a backend side solution.
// - This acts as a middle layer between frontend and backend.
// - A gatekeeper for the api that prevents unknown receivers from accessing the api.
// - CORS means that the backend and frontend are in different domains i.e. origins.
// - In order to allow the api to be accessed by the frontend, we need to set the cors policy.
// - There are several ways to set the cors policy.
// - - URL whitelisting: asking backend dev to whitelist the frontend url.
// - - Install CORS package in backend.
// - - Then use cors package in backend to set the cors policy.
// - - Ex. 
// - - - import cors from "cors";
// - - - app.use(cors({origin:"http://localhost:3000"}));
// - - - Refer Cors package documentation for more information.


// PROXY
// - This method is a frontend side solution.
// - This is a way to set the initial url of the api.
// - There are several ways to set the initial url of the api, in different tool chains
// - For Vite, we can set the initial url of the api in the vite.config.js file.
// - Like this
// 
// in the defineConfig parameter object, add this object
// server : {
//   proxy : {
//     "/api" : "http://localhost:3000"
//   }
// }    
// }
// - What this does?
// - It appends the initial url of the api to http://localhost:3000.
// - It also makes that backend believe that the request is coming from http://localhost:3000, it does not give cors error.
// - So with this we don't need to set the cors policy.



// A bad practice many use
// - Some people create a build of the frontend and then serve it as a static file in the backend.
// - Why is this bad?
// - - Because in this practice the changes to the frontend do not propagate to the backend.
// - - We have to manually create another build of the frontend.
// - - And move it to the backend.
// - - Hence this is a really bad practice.