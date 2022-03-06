
//TODO: Understand why change me is not changed to hello when click is done
"use strict";

function getData() {
    document.getElementsByTagName("p")[0].textContent = document.getElementsByTagName("button")[0].getAttribute("data.whatever");
}

// function getData() {
//     document.getElementsByTagName("p")[0].textContent = document.getElementsByTagName("button")[0].getAttribute("data.whatever");
// }