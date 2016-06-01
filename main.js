
function rangeDisplay () {
	var x = document.getElementById('myRange').value;
		document.getElementById('rangeDisplayResult').innerHTML = 'Current range selection ' + x;
}

function handleConversion () {
  var gpmInput = document.getElementById('GPMInput');
  var result = document.getElementById('Result');
  var range = document.getElementById('myRange').value;
  var gpm = gpmInput.value;
      result.innerHTML = 'Acre-feet Per Year (ac ft/yr): ' + convert(gpm, range);
  
}

function handleConversion2 () {
  var AFYInput = document.getElementById('AFYInput');
  var result2 = document.getElementById('Result2');
  var range = document.getElementById('myRange').value;
  var afy = AFYInput.value;
      result2.innerHTML = 'Gallons (us Fluid) Per Minute (GPM): ' + convert2(afy, range);
  
}

function convert (value,decimals) {
  // conversion function
  return (value * 1.61408).toFixed(decimals);
}

function convert2 (value2,decimals) {
  // conversion function
  return (value2 * 0.61955).toFixed(decimals);
}