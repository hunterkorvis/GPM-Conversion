// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {

  var gpm = {
    conversion: 1.61408,
    input: document.getElementById('GPMInput')
  };

  var afy = {
    conversion: 0.61955,
    input: document.getElementById('AFYInput')
  };

  var precision = {
    counter: document.getElementById('PrecisionCounter'),
    input: document.getElementById('PrecisionInput'),
    updateCounter: function () {
      this.counter.innerHTML = this.input.value;
    },
    decimals: function (val) {
      return Number(val).toFixed(this.input.value);
    } // Force value passed to number, then apply .toFixed
  };

  // Bind ui events
  gpm.input.onkeyup = convert(gpm, afy);
  afy.input.onkeyup = convert(afy, gpm);

  precision.input.onchange = function () {
    precision.updateCounter();
    gpm.input.value = precision.decimals(gpm.input.value);
    afy.input.value = precision.decimals(afy.input.value);
  };

  // Show initial precision value
  precision.updateCounter();

  function convert(source, target) {
    return function () {
      target.input.value = precision.decimals(source.input.value * source.conversion);
    } // Note: the convert function returns a function to fire on key up
  }

});
