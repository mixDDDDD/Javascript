const hasLicence = true;
const age = 21;
const isDrunk = false;

const canDrive = hasLicence 
    && age >= 18 
    && !isDrunk;

console.log(`${canDrive ? 'Может' : 'Не может'}`);