function handleConversion () {
  var gpmInput = document.getElementById('GPMInput');
  var result = document.getElementById('Result');

  var gpm = gpmInput.value;
      result.innerHTML = 'Acre-feet Per Year (ac ft/yr): ' + convert(gpm);

}

function handleConversion2 () {
  var AFYInput = document.getElementById('AFYInput');
  var result2 = document.getElementById('Result2');

  var afy = AFYInput.value;
      result2.innerHTML = 'Gallons (us Fluid) Per Minute (GPM): ' + convert2(afy);

}

function convert (value) {
  // conversion function
  return (value * 1.61408).toFixed(5);
}

function convert2 (value2) {
  // conversion function
  return (value2 * 0.61955).toFixed(5);
}