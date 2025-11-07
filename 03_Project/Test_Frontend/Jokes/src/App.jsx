import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {

  const [jokes, setJokes] = useState([]);
  const [Ajoke, setAjoke] = useState("");

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
        console.log("data fetched")
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  function serveAJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    setAjoke(jokes[index].setup);

    clearTimeout(timeoutId);

    setTimeout(() => {
      setAjoke(jokes[index].punchline);
    }, 2000)

  }

  return (
    <>
      <main className=" bg-cyan-950 text-blue-200 flex flex-col justify-center items-center gap-10 h-screen w-screen">

        <h1 className="text-[100px] font-serif">Jokes</h1>

        <button onClick={serveAJoke} className="border-[2px] text-cyan-950 border-solid bg-blue-200 border-blue-400 px-[20px] py-[10px] rounded-2xl ">Click to get a Joke</button>

        <div className="text-[50px] font-serif border-[2px] text-blue-200 border-solid border-blue-400 rounded-2xl h-[50%] aspect-video display flex justify-center items-center text-center" >
          {Ajoke || "Jokes Appear Here."}
          <p className="self-end justify-self-end absolute">😂</p>
        </div>



      </main>
    </>
  )
}
