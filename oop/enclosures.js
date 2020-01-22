const tipper = (a) => {
    return (b) => {
        return a * b
    }
}

const tip15 = tipper(.15)
const tip30 = tipper(.30)

console.log("expect 15")
console.log(tip15(100))
console.log("expect 30")
console.log(tip30(100))