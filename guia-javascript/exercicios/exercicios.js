function getNotas(nota){
    if (nota >= 90) {
        return "A"
    }else if (nota >= 80) {
        return "B"
    }else if (nota >= 70) {
        return "C"
    }else if(nota >= 60) {
        return "D"
    }else if (nota < 60) {
        return "F"
    }else {
        return "Nota inválida"
    }
}

console.log(getNotas(65))