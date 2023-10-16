console.log('hello')
let button = document.querySelector('.btn')
button.addEventListener('click', function(){
    console.log('hello')
})

function setColor(e){
    if(e.type==='mouseover')
    e.target.style.backgroundColor = "black"
    else 
    if(e.type==="mouseout")
        e.target.style.backgroundColor = "blue"
}

let click = document.querySelector('.click')
click.addEventListener("mouseover", setColor)
click.addEventListener("mouseout", setColor)
