function handleConversion () {
  var gpmInput = document.getElementById('GPMInput');
  var result = document.getElementById('Result');

  var gpm = gpmInput.value;
      result.innerHTML = 'Acre-feet Per Year (ac ft/yr): ' + convert(gpm);

}

function convert (value) {
  // conversion function
  return value;
}