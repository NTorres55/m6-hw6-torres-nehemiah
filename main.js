// Define variables
var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var lunchItems = ['Bellas Wood Fired Pizza & Tapas', 'Carols Kitchen', 'Cousins Maine Lobster',
'Cow Bar', 'Curry in a Hurry', 'Iylas Southern Kitchen', 'Makus Empanadas', 'MKG Kitchen', 'Oak City Fish & Chips', 'Sassool', 'The Bowls', 'The Broth', 'Wicked Taco', 'YoHo Hibachi & Sushi Burrito'];

var myFunction = function() {
  myHeading.classList.add('big-and-bold');
};

button.onclick = myFunction;
