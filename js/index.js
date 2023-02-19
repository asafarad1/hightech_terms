// let term = null;
// let info = null;
// let image = null;

// document.querySelectorAll(".item_container").forEach((item_container, index) => {
//     item_container.addEventListener("click", function() {
//         console.log("You clicked item number " + index);
//         console.log("You clicked item with the term " + this.innerText);
//         term = this.querySelector('.term');
//         term.classList.toggle('slideIn');
//         // info = this.querySelector('.info');
//         // info.classList.toggle('slideIn');
//         image = this.querySelector('.map');
//         image.classList.toggle('blur');
//     })
// });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].closest('.item').addEventListener("click", function() {
    this.querySelector('.item_header').classList.toggle("active");
    var item_content = this.querySelector('.item_content');
    if (item_content.style.maxHeight){
        item_content.style.maxHeight = null;
    } else {
        item_content.style.maxHeight = item_content.scrollHeight + "px";
    } 
  });
}