//paragraph[0].textContent.replace(/“(.*?)”/g, /<br> $1 <br>/)
console.log("app loaded")
var paragraph = document.getElementsByTagName("p")

for (let index = 0; index < paragraph.length; index++) {
    const element = paragraph[index];
    element.innerHTML = element.innerHTML.replace(/“(.*?)”/g, function(x){
        return '<br class="show"><b>' + x + '</b>';
    })
    
}




var pageLink = document.getElementsByClassName("page-number");
var pageNav = document.getElementById("page-nav")

for (let index = 0; index < pageLink.length; index++) {
     element = pageLink[index];
    element.classList.add("pagination-link")
/*
    var plistElement = document.createElement("li")
    plistElement.appendChild(element)
    paginationList.appendChild(plistElement)
    */
    
}

var paginationList = document.createElement('ul')
paginationList.classList.add("pagination-list")
paginationList.innerHTML = pageNav.innerHTML;
pageNav.innerHTML ="";

pageNav.appendChild(paginationList)
