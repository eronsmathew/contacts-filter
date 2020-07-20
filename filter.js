 let input = document.querySelector("#inputsearch");
 input.addEventListener("keyup", filterNames);

 function filterNames(){

    //Get the Input value
    let inputValue = document.querySelector("#inputsearch").value.toUpperCase();

    //Get the lis fron the ul
    let li = document.querySelectorAll("li.collection-item");
    for(let i = 0; i < li.length; i++){
        let list = li[i];
        let a = list.getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1){
            list.style.display = "";
        } else{
            list.style.display = "none";
        }
    }
 }