var btns=document.querySelectorAll("#subject_list .del_btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const li=e.target.parentElement.parentElement;
        li.parentNode.removeChild(li);
    })
})




//add subjects in the list

add_btn.addEventListener("click",function(e){
    e.preventDefault();
    const value=document.querySelector('input[type="text"]').value;




//create elements
const li=document.createElement("li");
const book_name=document.createElement("span");
const delete_Btn=document.createElement("span");

console.log(book_name);

//add content
delete_Btn.textContent="delete";
book_name.textContent=value;

//append to document
li.appendChild(book_name);
li.appendChild(delete_Btn);
subject_list.appendChild(li);

//add classes
book_name.classList.add('sn');
delete_Btn.classList.add("del_btn");
li.classList.add("myLi");


//margin
// li.style.marginTop = "10px";


})


