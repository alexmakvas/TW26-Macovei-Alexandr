const CNP: string = "2990219469000";

function validateCNP(cnp: string): boolean {

    let CNP_const: number[] = [2,7,9,1,4,6,3,5,8,2,7,9];
    let cifre: number[] = cnp.toString().split('').map(Number);

    if (cifre.length != 13) {
        return false;
    }
    
    if (/^(\d)\1{12}$/.test(cnp)) return false;
    let suma: number = 0;

    for (let i = 0; i < 12; i++) {
        suma += cifre[i]! * CNP_const[i]!;
    }

    let rest: number = suma % 11;
    let cifra_control: number;

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


export { validateCNP };