const days = ["1", "2", "3", "4", "5"]
function test1(days) {
    for (let j of days) {
        for (let i of days) {
            console.log(i)
        }
        console.log("Function completed..")
        if (j == "4") break
    }
}
// this is comment
console.log("Before pulling")
// before pulling

test1(days)
