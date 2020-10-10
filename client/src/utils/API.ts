import axios from "axios";

export default {
    getJokes: function(jokesData: any) {
        return axios.get("/api/jokes", jokesData)
    }
}