var x = 0

setInterval(() => {
    x += 1
    document.querySelector("#cpuProgress").value = x
    document.querySelector("#cpuSmall").innerHTML = x + "%"
    document.querySelector("#memProgress").value = x
    document.querySelector("#memSmall").innerHTML = x + "%"
}, 100);
