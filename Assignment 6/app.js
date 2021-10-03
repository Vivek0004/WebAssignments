const btn=document.querySelector("#btn");
let input_text=document.querySelector("#input_text");
let content=document.querySelector("#content");
let work=[];
let count=0;
let btn1=document.querySelector("#btn1");
let flag=false;
function refreshItems()
{    
    content.innerHTML="";
        setTimeout(()=>{
        work.map((val)=>{
               
                flag=true;
                content.insertAdjacentHTML("afterbegin",`
                
                <div class="items" id="${val.id}">
                <div class="prop">
                
                <i class="fas close">&#10006</i>
                <i class="fas up">&#8593</i>
                <i class="fas down">&#8595</i>
               </div>
                <h3>${val.text}</h3>
               
            </div>`);
               
        })
       },1);
    };
const addData=()=>{
    let text=input_text.value.trim();
  refreshItems();
   if(text!="")
   {
        count++;
        work.push({text,id:count});
        
        count++;
        input_text.value=""; 
        input_text.focus();
    }
    else{
        alert("Please enter Something");
    }
    
}
console.log(content.innerHTML);
document.addEventListener("keydown",(e)=>{if(e.key==="Enter")
{
    addData();
}});
btn.addEventListener("click",()=>{
    addData();
    
    if(flag)
    {
        btn.innerHTML='';
    
    setTimeout(changeIcon,500);
    }
    
});
//// delete functionality
content.addEventListener('click', deleteCheck);
function  deleteCheck(e){
const item=e.target;
if(item.classList[1]==="up")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<work.length;i++)
     {
         if(work[i].id==todo)
         {
             index=i;
         }
        
     }
     if(index!=work.length-1)
     {
        const temp=work[index+1];
        work[index+1]=work[index];
        work[index]=temp;
        
        refreshItems();
     }
     else{
         alert("chill!!");
     }
}
if(item.classList[1]==="down")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<work.length;i++)
     {
         if(work[i].id==todo)
         {
             index=i;
         }
        
     }
     if(index!=0)
     {
        const temp=work[index-1];
        work[index-1]=work[index];
        work[index]=temp;
        
        refreshItems();
     }
     else
     {
         alert("Chill");
     }
}
if(item.classList[1]==="close")
{
    const todo=item.parentElement.parentElement;

todo.remove();
const newArray=work.filter(({id})=>id!=todo.getAttribute("id"));
work=newArray;

}
/// to filter options
btn1.addEventListener("click",(e)=>{
    console.log(e.target.value);
    let todos=content.childNodes;
    console.log(todos);
    todos.forEach(function (todo){
        switch(e.target.value)
        {
            case "all":
                todo.style.display='flex';
               break;
            case "completed":
                 {
                     if( todo.classList.contains("rotate-vert-center"))
                     {
                        todo.style.display='flex';
                     }
                     else
                      todo.style.display='none';
                     break;
                 }
            case  "remaining":
                {
                    if( !todo.classList.contains("rotate-vert-center"))
                    {
                       todo.style.display="flex";
                    }
                    else
                    todo.style.display='none';
                    break; 
                }
                
        }
    });;

});}