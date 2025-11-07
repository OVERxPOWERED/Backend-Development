import express from "express";
import 'dotenv/config'; // to use .env file
// import dotenv from "dotenv"; // to use .env file
// dotenv.config(); // to use .env file and also to edit some options.

const app = express();
// const PORT = 2006;

let opData = {
  "login": "OVERxPOWERED",
  "id": 162055365,
  "node_id": "U_kgDOCajExQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/162055365?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/OVERxPOWERED",
  "html_url": "https://github.com/OVERxPOWERED",
  "followers_url": "https://api.github.com/users/OVERxPOWERED/followers",
  "following_url": "https://api.github.com/users/OVERxPOWERED/following{/other_user}",
  "gists_url": "https://api.github.com/users/OVERxPOWERED/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/OVERxPOWERED/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/OVERxPOWERED/subscriptions",
  "organizations_url": "https://api.github.com/users/OVERxPOWERED/orgs",
  "repos_url": "https://api.github.com/users/OVERxPOWERED/repos",
  "events_url": "https://api.github.com/users/OVERxPOWERED/events{/privacy}",
  "received_events_url": "https://api.github.com/users/OVERxPOWERED/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-03-03T19:45:50Z",
  "updated_at": "2025-09-21T05:54:23Z"
}

app.get("/", (req, res)=>{
    res.send("Hello World from OVERxPOWERED");
});

app.get("/gitHub", (req, res)=>{
    // res.send(JSON.stringify(opData).replace(/"/g,",", ",\n"));
    res.send(opData);
})

app.get("/who_are_you", (req, res)=>{
    // res.send("I am OVERxPOWERED, the creator of this server.");
    res.send('<h1 style="color:blue;">I am OVERxPOWERED, the creator of this server.</h1>'); // HTML
});

app.get("/who_are_you/what_are_you_doing", (req, res)=>{
    // res.send("I am OVERxPOWERED, the creator of this server.");
    res.send('<h1 style="color:blue;">I am learning backend development.</h1>'); // HTML
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})