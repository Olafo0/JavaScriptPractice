const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take."
];


6

var getRandomQuote = () =>{
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log("--- --- --- --- ---")
    console.log(quotes[randomNumber]);
    console.log("--- --- --- --- ---")
}

getRandomQuote()