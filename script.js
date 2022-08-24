window.onload=function()
{
    setInterval(() => {
        stopLoader();
    }, 3000);;

};
function stopLoader()
{
    document.querySelector(".container").style.display="none";
    document.getElementById("todocon").style.display="block";

}

var todoinput=document.querySelector(".todo-input");
var btn=document.querySelector("button");
var todolist=document.querySelector(".todo-list");

btn.onclick=function createTodo(e)
{
    e.preventDefault();
    if(todoinput.value==""||todoinput.value==" "||todoinput.value=="  "||todoinput.value=="   ")
    {
        alert("enter add task in your  To-do list  please")
    }
    else
    {

    
    var newDiv=document.createElement("div");
    newDiv.classList.add("todo");
    
    var  newli= document.createElement("li");
    newli.classList.add("todo_item");
    newli.innerHTML=todoinput.value;
    newDiv.appendChild(newli);


    var  cmpltbtn= document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>'
    newDiv.appendChild(cmpltbtn);

    var  deletebtn= document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerHTML='<i class="fa fa-trash"></i>'
    newDiv.appendChild(deletebtn);

    todolist.appendChild(newDiv);

    todoinput.value="";
    }
};

    todolist.onclick=function checkbtn(e)
    {
        var check=e.target;
        console.log(check);
        if(check.classList[0]=='deletebtn')
        {
            console.log("delete");
            var parentNode=check.parentElement;
            parentNode.remove();
            
        }
        else if(check.classList[0]=="cmpltbtn")
        {
            console.log("complete");
        var parentNode=check.parentElement;
        parentNode.classList.add("check");
        }
    }
    // btn.onclick=storedata;
    // function storedata()
    // {
    //     var data={
    //         list:todoinput.value,
    //     };
    //     console.log(data)

    //     localStorage.setItem("To-do",JSON.stringify(data));
    // }
    



