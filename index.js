// this class defines specific attributes for each individual, such as name, age, ID, and educational field
class Person {
    constructor(name, age, id, education) {
        this.name = name
        this.age = age
        this.id = id
        this.education = education
    }
}

// here is our array to push informations 
let people = []

// we are using this function for Add a new person to our array 
function addPerson(name, age, id, education) {
    const person = new Person(name, age, id, education)
    people.push(person)
}

// we are using this function for delete a person in our array with using ID 
function deletePersonById(id) {
    const index = people.findIndex(person => person.id === id)
    if (index !== -1) {
        const deletedPerson = people.splice(index, 1)[0]
    } else {
        console.log(`person with ID ${id} Not found`)
    }
}

// we are using this function for a person`s information in our array 
function editPersonById(id, newName, newAge, newEducation) {
    const index = people.findIndex(person => person.id === id)
    if (index !== -1) {
        people[index].name = newName
        people[index].age = newAge
        people[index].education = newEducation
    } else {
        console.log(`person with ID ${id} Not found`)
    }
}

console.log(`
راهنمایی :
برای افزودن کاربر جدید = addPerson("name", age, "id", "education") 
برای حذف افزودن کاربر = deletePersonById("id")
برای ویرایش کاربر = editPersonById("id", "newName", newAge, "newEducation")
نشان دادن آرایه =  console.log(people)
`)