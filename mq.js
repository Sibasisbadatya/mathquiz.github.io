var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;
let operators = ['+', '-', '*', '/'];
var ro = Math.floor(Math.random() * 4);
function start() {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    let operators = ['+', '-', '*', '/'];
    var ro = Math.floor(Math.random() * 4);
    document.querySelector("#input1").value = `${num1} ${operators[ro]} ${num2}`;
    document.getElementById("start").value = "Next question";
    document.getElementById("input2").value = "";
}
   


setTimeout(tensec, 10000);

function tensec() {
    var fq = document.getElementById("input1").value;
    var res = eval(fq).toFixed(1);
    var ev = document.getElementById("input2").value;
    if (res == ev) {
        alert("YOU ARE RIGHT !!");
    }
    else if (res != ev) {
        alert(`YOU ARE WRONG !! AS CORRECT ANS IS ${res}`);
    }
    else if (ev.length == 0) {
        alert("ENTER A VALID INPUT");
    }

}

function check() {
    document.getElementById("start").value = "Next question";
    var fq = document.getElementById("input1").value;
    var res = eval(fq).toFixed(1);
    var ev = document.getElementById("input2").value;
    if (res == ev) {
        alert("YOU ARE RIGHT");
    }
    else if (res != ev) {
        alert(`YOU ARE WRONG AS CORRECT ANS IS ${res}`);
    }
    else if (ev.length == 0) {
        alert("ENTER A VALID INPUT");
    }

}

