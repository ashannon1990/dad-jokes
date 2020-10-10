import axios from "axios";

export default {
    getJokes: (jokesData) => {
        return axios.get("/api/kples", jokesData)
    }
}