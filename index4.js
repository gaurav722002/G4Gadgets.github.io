   var sidebar= document.querySelector("#sidebtn")
   var sidenav= document.querySelector(".sidenavbar")
   var close =document.querySelector("#close")
   var body = document.querySelector("body")

   sidebar.addEventListener('click',function(){
    sidenav.style.left="0%"
    body.style.overflowY="hidden"
})

   close.addEventListener('click',function(){
    sidenav.style.left = "-100%"
    body.style.overflowY = "scroll"
})