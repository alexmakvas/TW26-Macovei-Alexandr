const CNP = 2990219469000;

function validateCNP(cnp) {

    let CNP_const = [2,7,9,1,4,6,3,5,8,2,7,9];
    let cifre = cnp.toString().split('').map(Number);

    if (cifre.length != 13) {
        return false;
    }

    let suma = 0;

    for (let i = 0; i < 12; i++) {
        suma += cifre[i] * CNP_const[i];
    }

    let rest = suma % 11;
    let cifra_control;

    if (rest < 10) {
        cifra_control = rest;
    } else {
        cifra_control = 1;
    }

    if (cifra_control == cifre[12]) {
        return true;
    }

    return false;
}

if (validateCNP(CNP)) {
    console.log("CNP valid");
} else {
    console.log("CNP invalid");
}