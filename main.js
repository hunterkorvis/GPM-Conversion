function rangeDisplay () {
	var x = document.getElementById('myRange').value;
		document.getElementById('rangeDisplayResult').innerHTML = 'Current range selection: ' + x;
}

function handleConversion (id, conversionFunction, message) {

  // getElementsByTagName returns an array
  // we know we only have one element of this tag type so we take the first item in the array [0]

  var element = document.getElementById(id);
  var input = element.getElementsByTagName('input')[0];
  var button = element.getElementsByTagName('button')[0];
  var result = element.getElementsByTagName('p')[0];
  var range = document.getElementById('myRange')[0];
  // tell the button what function to use when clicked
  button.onclick = function () {
    result.innerHTML = message + conversionFunction(input.value, myRange.value);
  };
}

function gpmToAfy (gpm, decimals) {
  return (gpm * 1.61408).toFixed(decimals);
}

function afyToGpm (afy, decimals) {
  return (afy * 0.61955).toFixed(decimals);
}

// Get elements once DOM has loaded
// Sometimes the JS fires before the DOM is fully loaded, so we wait for the DOM to tell us it's ready
document.addEventListener('DOMContentLoaded', function () {

  // handleConversion takes ID, function, message
  handleConversion('GPM', gpmToAfy, 'Acre-feet Per Year (ac ft/yr): ');
  handleConversion('AFY', afyToGpm, 'Gallons (us Fluid) Per Minute (GPM): ');
  rangeDisplay();
}, false);
