var count = 1
var container = document.getElementById("container");
function generateItems(){
    var div = document.createElement("div")
    for(let i=0; i<24; i++){
        var h1 = document.createElement("h1");
        h1.textContent  = `Masai Student ${count++}`
        div.append(h1);
    }
    container.append(div);
}

function throttler(scrollTop,clientHeight,scrollHeight){
    if((scrollTop + clientHeight) > scrollHeight * 0.8){
        generateItems();
    }
}

container.addEventListener("scroll",function(){
    throttler(container.scrollTop,container.clientHeight,container.scrollHeight)
    // console.log(container.scrollTop,container.clientHeight,container.scrollHeight)

})
window.addEventListener("load",function(){
    generateItems();
})