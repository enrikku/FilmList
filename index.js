document.addEventListener("DOMContentLoaded", () => {
  const archivo = "./film.txt";

  fetch(archivo)
    .then((response) => response.text())
    .then((contenido) => {
      const lineas = contenido.split("\n");

      lineas.forEach((linea) => {
        const nombre = linea.trim();

        if (nombre !== "") {
          const divContainer = document.getElementById("container");
          const divFilm = document.createElement("div");
          const divImage = document.createElement("div");
          const divText = document.createElement("div");
          const titol = document.createElement("h3");
          const nomClassImage = nombre.replace(/ /g, "-");
          const rutaImg = "./img/" + nomClassImage + ".jpg";
          divFilm.id = "film";

          divImage.id = "film-image";
          divImage.classList = nombre;

          divImage.style.backgroundImage = `url(${rutaImg})`;
          divImage.style.backgroundSize = "100% 100%";

          divText.id = "text";
          titol.textContent = nombre;

          divContainer.appendChild(divFilm);
          divFilm.appendChild(divImage);
          divImage.appendChild(divText);
          divFilm.appendChild(divText);
          divText.appendChild(titol);

          var total = document.getElementById("total")
          var qtt = document.querySelectorAll("#film");

          total.textContent = qtt.length
        }
      });
    })
    .catch((error) => console.error(error));
});
