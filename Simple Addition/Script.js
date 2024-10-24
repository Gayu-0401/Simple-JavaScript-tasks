function add() {
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    let sum = a + b;
    document.getElementById("box").innerHTML = sum;
    // let result  = document.getElementById("box");
    // result.innerHTML = sum;
}