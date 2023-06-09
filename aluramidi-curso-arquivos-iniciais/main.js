function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template String

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code == "Space" || event.code === "Enter") {
      listaDeTeclas.classList.add("ativa");
    }
  };
}

tecla.onkeyup = function () {
  tecla.classList.remove("ativa");
};
