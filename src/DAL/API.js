import Axios from "axios";

const instance = Axios.create({
    headers: {
        'X-Api-Key': '756c9187-b359-41c8-89c8-ed6efe7dbd2a'
    },
    baseURL: 'https://api.pokemontcg.io/v2/cards'
})
export const API = {
    getPokemons() {
        return instance.get().then(res => res.data.data).catch(error => {
            console.log(error);
        })
    }
}

