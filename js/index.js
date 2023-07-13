var arrayOfAuthour = ["--Nelson Mandela", "--Epictetus", "--Elbert Hubbard", "--Wayne Gretzy", "--Jim Rohn", "--Frank Sinatra"];
var arrayOfQuotes = ["'Resentment is like drinking poison and waiting for your enemies to die.'", 
"'It\'s not what happens to you, but how you react to it that matters.'",
 "'Do not take life too seriously. You will not get out alive'", 
"'You miss 100% of the shots you don\'t take.'",
 "'Beware of what you become in pursuit of what you want'", 
 "'The best revenge is massive success.'"];

    function runQuote() {
    var quoteNum=Math.floor(Math.random() * arrayOfAuthour.length);
    document.getElementById("quoteOutput").innerHTML=arrayOfQuotes[quoteNum];
    document.getElementById("authorOutput").innerHTML=arrayOfAuthour[quoteNum];
}