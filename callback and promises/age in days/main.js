function ageInDays(person, logCallback) {
    let fullName = `${person.fname} ${person.lname}`
    let ageInDays = person.age*365

    return function() {
        logCallback(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`)
    }
}

const person = {
    fname: "Hemant",
    lname: "konda",
    age:22
}

function logResult(massage) {
    console.log(massage);
}

const callback = ageInDays(person, logResult);
callback();