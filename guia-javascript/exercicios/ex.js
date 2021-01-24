function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree;
    let formula;
    let degreeSign;
    if (fahrenheitExists) {
        updatedDegree = Number(degree.toUpperCase().replace("F", ""))
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        degreeSign = 'C'
    }

    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    return formula(updatedDegree).toFixed(1) + degreeSign
}

try {
    console.log(transformDegree('36C'))
    console.log(transformDegree('90F'))
} catch (error) {
    console.log(error.message)
}