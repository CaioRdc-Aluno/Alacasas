/*função para adicionar elementos de '../components' nas páginas html de forma dinamica. (a ser estudada...) */
export function deployComponents (query,link){
    fetch(link)
      .then(response => response.text())
      .then(data => {
        document.querySelector(query).innerHTML = data;
      });
}

