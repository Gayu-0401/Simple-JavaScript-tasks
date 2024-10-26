var ul = document.getElementById("container-list")
var input = document.getElementById("input")
function add(){
    var list = document.createElement("li")
    list.innerHTML = input.value + "<button onclick='remove(event)'>delete</button>"
    ul.append(list)
}
function remove(event){
    event.target.parentElement.remove()
}