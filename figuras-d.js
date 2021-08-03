/* const radioCirculo     = 4,
      diametroCirculo  = radioCirculo * 2,
      PI               = Math.PI;
      perimetroCirculo = diametroCirculo * PI,
      areaCirculo      = (radioCirculo * radioCirculo) * PI;
      const perCir = parseFloat(perimetroCirculo.toFixed(4));
      const areCir = parseFloat(areaCirculo.toFixed(4));

console.log(`Radio: ${radioCirculo} | diametro: ${diametroCirculo} | PI: ${PI}`);
console.log(`Perimetro:${perCir} | area: ${areCir}`);
console.groupEnd(); */


const radioCirculo     = 4,
      PI               = Math.PI;

console.group('Cuadrado');
    function perimetroCuadrado(lado) {
        return lado * 4;
    }
    function areaCuadrado(lado) {
        return lado * lado;
    }
console.groupEnd();

console.group('Triangulo');
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    
    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
console.groupEnd();

console.group('Circulo');
    function diametroCirculo(radio) {
        return (radio * 2);
    }
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return (diametro * PI);
    }
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }
console.groupEnd();

