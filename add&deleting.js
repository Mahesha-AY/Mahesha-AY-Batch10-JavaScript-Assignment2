var btn=document.getElementById("test");

btn.addEventListener("click",addfruit);

var list=document.getElementById("fruit");

var acount=0;
var dcount=0;


function addfruit(){
if(acount==0){
    var x=document.createElement("li");
    x.innerText="jackfruit";
    list.appendChild(x);
    // list.insertBefore(x,list.childNodes[2]);
    acount++;
}
}

function deleteitem(){
if(dcount==0){
    list.removeChild(list.lastElementChild);
    dcount++;
}
}