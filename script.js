var title = document.getElementById("title")
var partNumber = document.getElementById("partNumber")
var quantity = document.getElementById("quantity")
var item = document.getElementById("item")
var description = document.getElementById("description")
var pdf = document.getElementById("pdf")

feather.replace()

function itemClicked(e) {
    e.target.classList.toggle("clicked");
}

function itemAll() {
    var elements = document.getElementsByClassName("widget")
    
        for (var i = 0; i < elements.length; i++){
            elements[i].classList.toggle("clicked");
        }
}


function showDetail(e) {
    console.log(e.target.getAttribute("data-title"))
    title.innerHTML=e.target.getAttribute("data-title")
    partNumber.innerHTML="Part Number : "+e.target.getAttribute("data-partNumber")
    quantity.innerHTML="Quantity : "+e.target.getAttribute("data-quantity")
    item.innerHTML="item : "+e.target.getAttribute("data-item")
    description.innerHTML=e.target.getAttribute("data-description")
    pdf.src=e.target.getAttribute("data-pdf")
}

function resize() {
    var content = document.getElementById("close")
    content.classList.toggle("close-click")

    var content = document.getElementById("content")
    content.classList.toggle("content-full")

    var content = document.getElementById("sidebar")
    content.classList.toggle("sidebar-small")

    var content = document.getElementById("wrapper")
    content.classList.toggle("wrapper-hide")
}