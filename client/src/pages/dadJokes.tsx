import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import axios from 'axios';
// import API from '../utils/API';
import { stringify } from 'querystring';

const JokeCard = () => {

    const [jokesState, setJokes] = useState({
        jokes: [{
            joke: "Why did the chicken cross the road?",
            punchline: "To get to the other side"
        }]
    })

    // const getJokes = () => {
    //     API.getJokes(this.jokesData)
    //         .then(res => {
    //             console.log(res.data)
    //             setJokes(
    //                 ...jokes,
    //                 res.data)
    //         })
    // }

    // useEffect()

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