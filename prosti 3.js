const print = console.log
const x = 100

let i = 2

while (i <= 100) {
    let j = 2

    while (i > j) {
        if (i % j == 0) {
            print(i + " e slozhen");
            break;
        } else {
            j++
        }
    }

    if (i == j) {
        print(i + " e prost")
    }

    i++
}