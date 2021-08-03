// Código de cuadrado
console.group("Cuadrados")
    const ladoCuadrado = 5;
    console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

    const areaCuadrada = ladoCuadrado * ladoCuadrado;
    console.log(`El area del cuadrado es: ${areaCuadrada}cm^2`);
console.groupEnd();



// Código del triangulo
console.group("Triangulos")
    const ladoTriangulo1 = 5;
    const ladoTriangulo2 = 8;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
    );
    console.log(`La altura el triangulo mide: ${alturaTriangulo}cm`);

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

    console.log(`El perimetro del triangulo es de: ${perimetroTriangulo}`);

    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`El área del triangulo es: ${areaTriangulo}`);
console.groupEnd();

// Código del circulo

console.group("Circulos");
    const radioCir = 4;
    const diametro = radioCir * 2;
    const Pi = Math.PI;
    const circunferencia = diametro * Pi;
    const areaCir = Pi * (radioCir * radioCir);

    console.log(`El radio del circulo es: ${radioCir}cm`);
    console.log(`El diametro del circulo es: ${diametro}cm`);

    console.log(`El perimetro o circunferencia del circulo es: ${circunferencia.toFixed(4)}`);
    console.log(`El área del circulo es: ${areaCir.toFixed(4)}cm^2`);

console.groupEnd();

////////////////////////////
console.log("//////////////////////////////////////////////////////////////");

const radioCirculo     = 4,
      diametroCirculo  = radioCirculo * 2,
      PI               = Math.PI,
      perimetroCirculo = diametroCirculo * PI,
      areaCirculo      = (radioCirculo * radioCirculo) * PI;

      const perCir = parseFloat(perimetroCirculo.toFixed(4));
      const areCir = parseFloat(areaCirculo.toFixed(4));

console.log(`Radio: ${radioCirculo} | diametro: ${diametroCirculo} | PI: ${PI}`);
console.log(`Perimetro:${perCir} | area: ${areCir}`);
console.groupEnd();