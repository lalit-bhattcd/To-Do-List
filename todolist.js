let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , () => {
    let item = document.createElement("li");
    item.innerText= input.value;

    let del = document.createElement("button");
    del.innerText = "deleteTask";
    del.classList.add("deleteTask");

    item.appendChild(del);
    ul.appendChild(item);
    input.value = "";
});

    let delbtns = document.querySelector(".DeleteTask");
    for(del in delbtns){
        del.addEventListener("click" , () =>{
        let par = this.parentElement();
        console.log(par);
        
        par.remove();
    });
}
