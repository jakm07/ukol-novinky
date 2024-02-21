let bodyElement = document.querySelector("body")
let news = document.querySelector(".news")
let nadpis = document.querySelector("h1")
let prvni = document.querySelector("#zprava1")
let obrazek = document.querySelector("#zprava3 img")

bodyElement.style.backgroundColor = "#e9e9e9"
news.style.backgroundColor = "white"
news.style.maxWidth = "60rem"
nadpis.classList.add("news__title")
nadpis.textContent = "Aktuální novinky"
prvni.classList.add("post--main")
obrazek.src = "images/zprava3-novy.jpg"
