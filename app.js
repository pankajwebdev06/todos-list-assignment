

document.getElementById('btn-submit').addEventListener('click', 
function(){
    let input = document.getElementById('input').value;
    if(input.length == 0){
        alert("Please Type something to Add");
    }else{
    //Adding new elements 
    let elment = document.createElement('li');
    let btn_Done = document.createElement('button');
    let btn_delete = document.createElement('button');
    elment.style.fontFamily = "'Poppins', sans-serif";
    btn_Done.style.fontFamily = "'Poppins', sans-serif";
    btn_delete.style.fontFamily = "'Poppins', sans-serif";

    btn_Done.innerText = "Done";
    btn_delete.innerText = "Delete";
    elment.innerText = input;
    let list = document.getElementById('result-list');
    //Appending the created elements to  html
    list.appendChild(elment);
    elment.appendChild(btn_Done);
    elment.appendChild(btn_delete);

    // Adding functionality to the buttons

    btn_Done.addEventListener('click',
       function(){ 
        elment.style.textDecoration = "line-through";
       
    }
    );
    btn_delete.addEventListener('click',
       function(){ 
            elment.remove();

    }
    );
    document.getElementById('input').value = " ";
}

}
);
