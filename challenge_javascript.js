function CadenaF1(str) {
    if (str.trim().length == 0) {
        return "TRUE";

    } else {
        return "FALSE";
    }



}

console.log("challenge 1 - esta vacio :", CadenaF1(" "))


function CadenaF2(str) {
    if (str.includes("123")) {
        return "TRUE";

    } else {
        return "FALSE";
    }


}
console.log("challenge 2 - contiene 123: ", CadenaF2("ab123isai"))





function Json3(arreglo) {
    return JSON.stringify(arreglo);
}

let arreglo = [
    { clasificacion: "Básica,", cargo: "estudiante", edad: 18, nacionalidad: "Mexicana" },
    { clasificacion: "oro,", cargo: "profesionista junior", edad: 25, nacionalidad: "Mexicana" },
    { clasificacion: "plata,", cargo: "profesionista senior", edad: 35, nacionalidad: "cualquier nacionalidad" },
    { clasificacion: "Elite,", cargo: "dueñodeempresa", edad: 50, nacionalidad: "cualquier nacionalidad" },
    { clasificacion: "Descanso,", cargo: "jubilado", edad: 75, nacionalidad: "Mexicana" },


]
console.log("challenge 3 JSON ", Json3(arreglo))


function NumerosF4(numeros) {
    var mayor = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;

}
var numeros = [1, 1, 0, 50, 12, 11, 1, 91, 1, 1, 1, 1, 1, 1]
console.log("challenge 4 - Mayor es", NumerosF4(numeros));