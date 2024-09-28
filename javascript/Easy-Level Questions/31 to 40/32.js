function ageG(age) {
    if (age < 13) return 'Child';
    else if (age >= 13 && age <= 19) return 'Teenager';
    else if (age >= 20 && age <= 59) return 'Adult';
    else return 'Senior';
}
console.log(ageG(25));