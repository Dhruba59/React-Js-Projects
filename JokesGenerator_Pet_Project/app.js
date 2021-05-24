document.querySelector('.get-jokes').addEventListener('click', showJokes);

function showJokes(e) {
  const jokeNumber = document.getElementById('number').value;
  console.log(jokeNumber);

  
  const xhr = new XMLHttpRequest;
  xhr.open('GET', `http://api.icndb.com/jokes/random/${jokeNumber}`, true);

  xhr.onload = function () {

    let outputHtml ='';
    if (this.status === 200) {
      const jokesJSN = JSON.parse(this.responseText);

      if (jokesJSN.type === 'success') {
        jokesJSN.value.forEach(function (joke) {
          outputHtml += `
          <li> ${joke.joke} </li>
        `;
        });
      }
      else {
        outputHtml += `<li> Something went wrong </li> `;
      }
    }
    

    document.querySelector('.jokes').innerHTML = outputHtml;
  }

  xhr.send();

  e.preventDefault();
}