
function letrehoz() {
    let sakkTabla = document.getElementById("sakkTabla");
    let mezoSzama = parseInt(document.getElementById("mezoSzam").value);
    let mezoMeret = parseInt(document.getElementById("mezoMeret").value);
    let paratlan = true

    for (let i = 0; i < mezoSzama; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < mezoSzama; j++) {
            let td = document.createElement("td");

            if (paratlan) {
                td.classList.add("paratlan")
                paratlan = false
                td.setAttribute("onclick", "szincsereParatlan(this)")
            }
            else {
                td.classList.add("paros")
                paratlan = true
                td.setAttribute("onclick", "szincsereParos(this)")
            }
            td.style.width = `${mezoMeret}px`;
            td.style.height = `${mezoMeret}px`;

            tr.appendChild(td)
        }
        sakkTabla.appendChild(tr)
    }
}

function szincsereParatlan(elem) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    let elemek = document.getElementsByTagName("td");

    for (let i = 0; i < elemek.length; i++) {
        if (elemek[i].className == "paratlan") {
            elemek[i].style.backgroundColor = `#${randomColor}`;
        }
        
    }
}
function szincsereParos(elem) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    let elemek = document.getElementsByTagName("td");

    for (let i = 0; i < elemek.length; i++) {
        if (elemek[i].className == "paros") {
            elemek[i].style.backgroundColor = `#${randomColor}`;
        }
        
    }
}