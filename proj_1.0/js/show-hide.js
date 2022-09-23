const contatar = getElementbyId("contratar");
const fechar = getElementbyId("fechar");
const back = getElementbyId("background-contato");

contatar.addEventListener ("click", 

function eventoBotao () {
    if (back.style.display == "none") {
        back.style.display = "block";
    }
});

