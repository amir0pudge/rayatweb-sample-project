  function data(val) {
      calc.calc.value += val;
  }

  function ac() {
      calc.calc.value = ''
  }

  function c() {
      calc.calc.value = calc.calc.value.slice(0, -1)
  }

  function equal() {
      calc.calc.value = eval(calc.calc.value);
  }