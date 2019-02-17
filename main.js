// Define variables
var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var ourRandomLunchItem = document.createElement('p');
var lunchItemWrapper = document.getElementById('generator-results');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createElement('p');

var lunchItems = ['Bella\'s Wood Fired Pizza & Tapas', 'Carroll\'s Kitchen', 'Cousins Maine Lobster',
'Cow Bar', 'Curry in a Hurry', 'Iyla\'s Southern Kitchen', 'Makus Empanadas', 'MKG Kitchen', 'Oak City Fish & Chips', 'Sassool', 'The Bowls', 'The Broth', 'Wicked Taco', 'YoHo Hibachi & Sushi Burrito'];

var myFunction = function() {
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  console.log(lunchItems);
};

button.onclick = myFunction;
