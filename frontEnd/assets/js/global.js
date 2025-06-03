export function deployComponents (query,link){
    fetch(link)
      .then(response => response.text())
      .then(data => {
        document.querySelector(query).innerHTML = data;
      });
}