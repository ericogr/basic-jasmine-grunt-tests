describe("Calculadora", function() {
  var nrA = 2;
  var nrB = 3;

  it("somar dois numeros", function() {
    var calculadora = new Calculadora();
    var resultado = calculadora.somar(nrA, nrB);
    expect(resultado).toEqual(5);
  });

  it("subtrair dois numeros", function() {
    var calculadora = new Calculadora();
    var resultado = calculadora.subtrair(nrA, nrB);
    expect(resultado).toEqual(-1);
  });

});
