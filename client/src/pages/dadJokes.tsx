import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
// import axios from 'axios';
import API from '../utils/API';

const JokeCard = () => {

    const [jokesState, setJokes] = useState({
        jokes: [{
            joke: "Why did the chicken cross the road?",
            punchline: "To get to the other side"
        }]
    })

    const getJokes = () => {
        API.getJokes(jokesState)
            .then((res: any) => {
                console.log(res.data)
                res.data.map( (data: any) => {
                    setJokes({
                        ...jokesState,
                        jokes: [{
                            joke: data.joke,
                            punchline: data.punchline
                        }]
                    })
                })
            })
            .catch(() => {
                console.log("Something went wrong")
                setJokes({
                    ...jokesState,
                    jokes: [{
                        joke: "Failed to load",
                        punchline: ""
                    }]
                })
            })
    }

    useEffect(() => {
        getJokes()
    })

    return (
        <div>
            <Card
                joke="Stupid joke"
                punchline="Stupid punchline"
            />
            <Card
                joke="Blah"
            />
            {jokesState.jokes.map((data, key) => {
                return (
                    <Card
                        key={Math.random}
                        joke={data.joke}
                        punchline={data.punchline}
                    />
                )
            })}
        </div>
    )
}

export default JokeCard;