import express from "express";
import 'dotenv/config';
// import cors from "cors";



const app = express();
const PORT = process.env.PORT;

// app.use(cors()); // This is used to set the cors policy.

const jokes = [
    {
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        setup: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        setup: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        setup: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        setup: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese!"
    },
    {
        setup: "Why can't your nose be 12 inches long?",
        punchline: "Because then it would be a foot."
    },
    {
        setup: "What did one wall say to the other wall?",
        punchline: "I'll meet you at the corner."
    },
    {
        setup: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        setup: "What do you call a belt made of watches?",
        punchline: "A waist of time!"
    }
];


// let index = 0;

app.get("/api/jokes", (req, res) => {
    // index = Math.floor(Math.random() * jokes.length);
    // res.send(jokes[index]);
    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});