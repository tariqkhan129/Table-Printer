
function table() {
    let num = +document.querySelector("#number").value
    document.querySelector("#mult").innerHTML = " "
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        document.querySelector("#mult").innerHTML += ` ${num} x ${i}  =  ${result} <br> `
    }

}
