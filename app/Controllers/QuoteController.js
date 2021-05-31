import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

function draw(toggle) {
    const quote = ProxyState.quote;
    console.log(ProxyState.quote, "quote proxystate");
    let template = `
     <header class = "text-white" onmouseover = "app.quoteController.hover()" onmouseleave = "app.quoteController.hover()">${toggle ? quote.content : quote.author}</header>
     
     `
    document.getElementById("quote").innerHTML = template


}
export default class QuoteController {
    constructor() {
        console.log("Quote Controller is working");
        ProxyState.on("quote", draw);
        this.getQuote();
        this.toggleQuote = true;
        draw(this.toggleQuote);


    }

    getQuote() {
        quoteService.getQuote();
    }


    hover() {
        console.log("hover")
        this.toggleQuote = !this.toggleQuote;
        draw(this.toggleQuote);

    }






}