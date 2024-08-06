



let btn = document.querySelector('#new-quote');
let quoteElement = document.querySelector('.quote');
let personElement = document.querySelector('.person');

const quotes = [
  {
    quote: " “Spread love everywhere you go. Let no one ever come to you without leaving happier.” ",
    person: "Mother Teresa",
  },
  {
    quote: " “The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.” ",
    person: "Helen Keller",
  },
  {
    quote: " “Do not go where the path may lead; go instead where there is no path and leave a trail.” ",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: " “In the end, it's not the years in your life that count. It's the life in your years.” ",
    person: "Abraham Lincoln",
  },
  {
    quote: " “Life is a succession of lessons which must be lived to be understood.” ",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: " “Only a life lived for others is a life worthwhile.” ",
    person: "Albert Einstein",
  },
  {
    quote: " “You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.” ",
    person: "John Lennon",
  },
  {
    quote: " “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: " “Don't worry when you are not recognized but strive to be worthy of recognition.” ",
    person: "Abraham Lincoln",
  },
  {
    quote: " “The greatest glory in living lies not in never falling, but in rising every time we fall.” ",
    person: "Nelson Mandela",
  },
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[random].quote;
  personElement.innerText = quotes[random].person;
});

