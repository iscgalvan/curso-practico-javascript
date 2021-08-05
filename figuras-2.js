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
/* Funciones para área y perimetro geometricas */

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    if (value == 0) {
        alert('Debe ingreser un valor mayor a 0');
    } else {
        const area = areaCuadrado(value);
        alert(`El área del cuadrado es:  ${area}`);
    }

}

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    if (value == 0) {
        alert('Debe ingreser un valor mayor a 0')
    } else {
        const perimetro = perimetroCuadrado(value);
        alert(`El perimetro del cuadrado es: ${perimetro}`)
    }
}

function calcularAlturaTrianguloIsosceles() {
    
}