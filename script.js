  var main = document.querySelector("#main")
  var curser = document.querySelector("#curser")
  

  main.addEventListener("mousemove",function(dets){
   curser.style.left = dets.x+"px"
   curser.style.top = dets.y+"px"
  })