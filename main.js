// Define variables
var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var myFunction = function() {
  myHeading.classList.add('big-and-bold');
};

button.onclick = myFunction;


//var lunchItemWrapper = document.getElementById('generator-results');

var ourRandomLunchItem = document.createElement('p');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholdertext = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholdertext);

var lunchItems = ['Bellas Wood Fired Pizza & Tapas', 'Carols Kitchen', 'Cousins Maine Lobster',
'Cow Bar', 'Curry in a Hurry', 'Iylas Southern Kitchen', 'Makus Empanadas', 'MKG Kitchen', 'Oak City Fish & Chips', 'Sassool', 'The Bowls', 'The Broth', 'Wicked Taco', 'YoHo Hibachi & Sushi Burrito'];


  lunchItems.sort(function(a, b){return 0.5 - Math.random()});

  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);

  var ourButtonSection = document.DocumentById('generator-button');
  ourButtonSection.removeChild(button);

  ourRandomLunchItem.classList.add('big-and-bold');
};
