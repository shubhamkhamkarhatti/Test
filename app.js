const days = ["1", "2", "3", "4", "5"]
function test1(days) {
    for (let j of days) {
        for (let i of days) {
            console.log(i)
        }
        if (j == "2") break
    }
    console.log("Function completed..")
}

test1(days)