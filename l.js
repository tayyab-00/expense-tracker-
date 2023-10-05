var l=document.getElementById("loginform");
l.addEventListener('submit',userinfo);
window.onload=function(){
for(let i =0;i<localStorage.length;i++){
    let k=localStorage.key(i);
    let stored=JSON.parse(localStorage.getItem(k));
    show(stored);
}
}
function userinfo(j){
    j.preventDefault();
    var username=document.getElementById("username");
    var password=document.getElementById("pass");
    var category=document.getElementById("category")
    var amount=j.target.username.value;
    var desc=j.target.password.value;
    var cat=j.target.category.value

    var obj={amount,desc,cat};
    localStorage.setItem(obj.amount,JSON.stringify(obj));
    show(obj);
    username.value="";
    password.value="";
}
function show(data) {
    var listElem = document.getElementById("items");
    var listItem = document.createElement("li");
    listElem.className='list-group-item';
    listItem.textContent = "amount: $" + data.amount + "  description: " + data.desc +"category:"+data.cat;
    var del=document.createElement("button");
    del.textContent="delete";
    del.className="btn btn-secondary float-right"
    del.addEventListener("click",function(){
        listItem.remove();
        del.remove();
        localStorage.removeItem(data.amount);
    });
    var edit=document.createElement("button")
    edit.textContent="edit";
    edit.className="btn btn-black float-right"
    edit.addEventListener("click",function (){
    var username=document.getElementById("username");
    var password=document.getElementById("pass");
    var category=document.getElementById("category");
        username.value=data.amount;
        password.value=data.desc;
        category.value=data.cat;
        listItem.remove();
        edit.remove();
        localStorage.removeItem(data.amount);
    });
    listElem.appendChild(listItem);
    listItem.appendChild(edit);
    listItem.appendChild(del);
}
