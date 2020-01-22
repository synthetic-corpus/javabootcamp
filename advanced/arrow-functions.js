const people = [
    {
        name: 'Charlie',
        age: 56
    },
    {
        name: 'Timothy',
        age: 41
    },
    {
        name: 'Alice',
        age: 33
    },
    {
        name: 'Suzie',
        age: 25
    }
]

const wouldFuck = people.filter((person) => person.age < 30)
console.log(wouldFuck[0].name)