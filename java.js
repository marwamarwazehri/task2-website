let iconBar= document.getElementById("iconBar");

let subbar= document.querySelector(".subbar");

let cancel=document.querySelector(".cancel");

let listChoose=document.querySelectorAll("#listChoose li");




iconBar.addEventListener("click",()=>{
   
   iconBar.style.display="none";

   subbar.style.display="flex";
   


})

cancel.addEventListener("click",()=>{
   
    iconBar.style.display="block";
 
    subbar.style.display="none";
    
 
 
 })


 window.addEventListener("resize", () => {
    if (window.innerWidth >700) { 
        subbar.style.display = "none";
        iconBar.style.display = "none";
       
    }

    if (window.innerWidth <=700) { 
        if(subbar.style.display === "none" && iconBar.style.display === "none" ){
            iconBar.style.display = "block";
        }
       
    }
});


listChoose.forEach((element) => {
    element.addEventListener("click", (e) => {
       
        listChoose.forEach((el) => {
            el.classList.remove("click");
        });

        
       
            e.target.classList.add("click");
        
    });
});
