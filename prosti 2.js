const print = console.log
const x = 100

function prost(n) {
    let i = 2

    while (n > i) {
        if (n % i == 0) {
            print(n + " e slozhen");
            break;
        } else {
            i++
        }
    }
    
    if (n == i) {
        print(n + " e prost")
    }
}

prost(n)
