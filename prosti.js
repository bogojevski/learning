const print = console.log
const x = -3, y = 4, z = 101

function prost(n) {
    if (n < 2) {
        throw "Brojot " + n + " ne smee da bide pomal od 2"
    }

    i = 2
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

prost(x)
prost(y)
prost(z)