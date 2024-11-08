var ul = document.getElementById("container-list")

function add(){
    var input = document.getElementById("input").value
    if(input.length >= 1){
        var list = document.createElement("li")
        list.innerHTML = input + "<button onclick='remove(event)'>delete</button>"
        ul.append(list)
        document.getElementById("input").value = ""
    }
    
}
function remove(event){
    event.target.parentElement.remove()
}

