let input = document.getElementById("input");

function display(num){
    input .value += num;
}
function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    input.value = "";
    
}
function del(){
    input.value = input.value.slice(0,-1);
}