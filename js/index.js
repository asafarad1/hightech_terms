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