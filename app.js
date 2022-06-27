let show = document.getElementById("show");
let uList = document.createElement("ul");

// DESCRIPTION
let descr = document.querySelector(".description");
descr.innerHTML =
  "In this example, we show an api call, one of the first methods. This method was reeplace today for fetch.<br>In this method was very important to know the state of our call, for example:<br><br><em>readyState 0</em> = UNSET, open method was not called.<br><em>readyState 1</em> = OPENED, open method was called.<br><em>readyState 2</em> = HEADERS_RECEIVED, is calling the <em>send()</em> method<br><em>readyState 3</em> = LOADING, receiving a response<br><em>readyState 4</em> = DONE, the operation has benn completed.<br><br>In this case I decided to show the results with <em>map()</em> but this is another topic.";

// Api call with "onRequestApi()".
const API_URL = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();

function onRequestApi() {
  //lo usamos a modo de callback

  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);

    let show = document.getElementById("show");

    const list = data.map(
      (U) => `<li>${U.username} - ${U.email} - ${U.company.name}</li>`
    );

    show.innerHTML += `<ul>${list}</ul>`;
  }
}
xhr.addEventListener("load", onRequestApi);
xhr.open("GET", `${API_URL}`);
xhr.send();
