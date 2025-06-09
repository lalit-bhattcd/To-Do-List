let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

btn.addEventListener("click" , () => {
    let item = document.createElement("li");
    item.innerText= input.value;

    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

    let com = document.createElement("completed");
    com.innerText = "completed";
    com.classList.add = "completed";

    item.appendChild(com);
    item.appendChild(del);
    ul.appendChild(item);
    input.value = "";
});
ul.addEventListener("click" , function(event){
    console.log("button clicked");
    console.dir(event.target);//tells what was the reason for occuring the argument
    console.log(event.target.nodeName);//Tells which element triggring the event
    if(event.target.innerText == "delete"){
        let newadd = event.target.parentElement;
        body.style.backgroundColor = "red";
        newadd.remove();
    }
    if(event.target.innerText == "completed"){
        setTimeout(() => {
            body.style.backgroundColor = "green";
            alert("Congratulations you've completed the taskkk");
        },1000);
    }
});



// let delBtns = document.querySelectorAll(".delete");
// for(del of delBtns){
//     del.addEventListener("click" , function() {
//     let par = this.parentElement;
//     par.remove();
// });
// }
