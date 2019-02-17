// Define variables
var button = document.getElementsByTagName('button')[0];
var lunchItemWrapper = document.getElementById('generator-results');

var ourRandomLunchItem = document.createElement('p');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholdertext = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholdertext);
