function Test(element) {

    var childs=document.querySelectorAll('div[class^=child]');
    childs.forEach(function (el) {
        el.classList.remove("sel");

    });
   /* for (var i=0; i<childs.length;i++){ //Работающий пример c циклом
        console.log(childs.items[i]);
        childs.item(i).classList.remove("sel");
    }*/
    element.classList.add("sel");

};

function Select(element) {

    var childs=document.querySelectorAll('section');
    childs.forEach(function (el) {
        //console.log(childs);
        el.classList.remove("selected");

    });
    /* for (var i=0; i<childs.length;i++){
     //console.log(childs.items[i]);
     childs.item(i).classList.remove("sel");
     }*/
    element.classList.add("selected");

};
