var btns=document.querySelectorAll("#subject_list .del_btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const li=e.target.parentElement.parentElement;
        li.parentNode.removeChild(li);
    })
})


