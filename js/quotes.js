const quotes = [
    {
        quote:"월요일 공부중",
        author:"추상엽"
    },
    {
        quote:"화요일 공부중",
        author:"추상엽"
        },
    {
        quote:"수요일 공부중",
        author:"추상엽"
        },
    {
        quote:"목요일 공부중",
        author:"추상엽"
    },
    {
        quote:"금요일 공부중",
        author:"추상엽"
    },
    {
        quote:"토요일 공부중",
        author:"추상엽"  
    },
    {
        quote:"일요일 공부중",
        author:"추상엽"
    },
    {
        quote:"공부가 어렵다",
        author:"추상엽"
    },
    {
        quote:"살려주세요.",
        author:"추상엽"
    },
    {
        quote:"노오오오력이" + " 부족합니다",
        author:"추상엽"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote =quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


