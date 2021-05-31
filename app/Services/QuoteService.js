import { ProxyState } from "../AppState.js"

const quoteAPI = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes"
})



class QuoteService {

    async getQuote() {
        try {
            let res = await quoteAPI.get();
            console.log(res.data);
            ProxyState.quote = res.data;
        } catch (error) {
            console.log(error);
        }

    }
}


export const quoteService = new QuoteService();
