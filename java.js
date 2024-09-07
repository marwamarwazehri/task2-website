let iconBar= document.getElementById("iconBar");

let subbar= document.querySelector(".subbar");

let cancel=document.querySelector(".cancel");

let listChoose=document.querySelectorAll("#listChoose li");

let piontsgroup=document.querySelectorAll(".pionts-group span");

let sofaimage=document.querySelector('.small-box-img');

let itemsContainer = document.querySelector('.items-container');




let itemArray=[
    {
        id:'0',
        category:"Meja",
        box:"Diskon 10%",
        boxColor:"#E34848",
        name:"Arkelstrop",
        img1:'./images/table1.png',
        img2:'./images/orangeTable1.jfif',
        img3:"./images/blacktable1.jfif",
        price:"Rp. 2.699.100",
        dis:"Rp. 2.999.000",
        color:["#EDCFB3",
        "#F08C00",
        "#46434A",
        ],
        tckitColor:"#565050"

},

{
    id:'1',
    category:"Meja",
    box:"Produk Baru",
    boxColor:"#59B162",
    name:"Lillasen",
    img1:'./images/table2.png',
    img2:"./images/orangetable2.jfif",
    price:"Rp. 2.499.000",
    // dis:"Rp. 2.999.000",
    color:["#B68044",
   "#F08C00"],
    // color3:"#46434A",
    // tckitColor:"#565050"

},

{
    id:'2',
    category:"Meja",
    box:"Produk Baru",
    boxColor:"#59B162",
    name:"Micke",
    img1:'./images/table3.png',
    img2:'./images/white-table1.avif',
    price:"Rp. 999.000",
    // dis:"Rp. 2.999.000",
    color:["#4A423F",
    "#C6C0C0"],
    // color3:"#46434A",
    // tckitColor:"#565050"

},

{
    id:'3',
    category:"Meja",
    // box:"Produk Baru",
    // boxColor:"#59B162",
    name:"Tilslag",
    img1:'./images/table4.png',
    img2:'./images/whitetable2.png',
    img3:"./images/blacktable2.jfif",
    price:"Rp. 1.499.000",
    // dis:"Rp. 2.999.000",
    color:["#EDCFB3",
   "#C6C0C0",
    "#46434A"],
    tckitColor:"#565050"

},
{
    id:'4',
    category:"Meja",
    // box:"Produk Baru",
    // boxColor:"#59B162",
    name:"Lagkapten/Adils",
    img1:'./images/table5.png',
    img2:'./images/brownTable1.avif',
    img3:'./images/whitetable3.jfif',
    price:"Rp. 849.000",
    // dis:"Rp. 2.999.000",
    color:["#46434A",
   "#EDCFB3",
   "#C6C0C0",]
    // tckitColor:"#565050"

},

{
    id:'5',
    category:"Meja",
    // box:"Produk Baru",
    // boxColor:"#59B162",
    name:"Adils/Linmon",
    img1:'./images/table6.png',
    img2:'./images/browntable2.avif',
    img3:'./images/blacktable3.jfif',

    price:"Rp. 499.000",
    // dis:"Rp. 2.999.000",
    color:["#C6C0C0",
    "#EDCFB3",
   "#46434A"],
    tckitColor:"#565050"

},

{
    id:'6',
    category:"Kursi",
    // box:"Produk Baru",
    // boxColor:"#59B162",
    name:"Adils/Linmon",
    img1:'./images/whitechair.jpg',
    img2:'./images/brownchair2.jfif',
    img3:'./images/blackchair.jfif',

    price:"Rp. 499.000",
    // dis:"Rp. 2.999.000",
    color:["#C6C0C0",
    "#EDCFB3",
   "#46434A"],
    tckitColor:"#565050"

},

{
    id:'7',
    category:"Lemari",
    // box:"Produk Baru",
    // boxColor:"#59B162",
    name:"Lagkapten/Adils",
    img1:'./images/brownCloset.jfif',
    img2:'./images/orangecloset.jfif',
    
    price:"Rp. 849.000",
    // dis:"Rp. 2.999.000",
    color:["#B68044",
        "#F08C00"],
    // tckitColor:"#565050"

},

{
    id:'8',
    category:"Rak",
    box:"Produk Baru",
    boxColor:"#59B162",
    name:"Micke",
    img1:'./images/blackShelf.avif',
    img2:'./images/whiteshelf.jfif',
    price:"Rp. 999.000",
    // dis:"Rp. 2.999.000",
    color:["#4A423F",
    "#C6C0C0"],
    // color3:"#46434A",
    // tckitColor:"#565050"

},

{
    id:'9',
    category:"Lampu",
    box:"Produk Baru",
    boxColor:"#59B162",
    name:"Micke",
    img1:'./images/blackLight.jpg',
    img2:'./images/whitelamp.avif',
    price:"Rp. 999.000",
    // dis:"Rp. 2.999.000",
    color:["#4A423F",
    "#C6C0C0"],
    // color3:"#46434A",
    // tckitColor:"#565050"

},





]



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


piontsgroup.forEach((selement)=>{

    selement.addEventListener("click",(e)=>{

        piontsgroup.forEach((sel)=>{
            sel.classList.remove("tickAdded");
              
            let tck=sel.querySelector('.tck');
            if(tck){
                tck.remove();
            }
        })

        e.target.classList.add("tickAdded");
         
        let tckDiv=document.createElement('div');
        tckDiv.classList.add("tck");

        tckDiv.innerHTML='<i class="fa-solid fa-check tik">';

        e.target.appendChild(tckDiv);

       
        if(e.target.classList.contains("blue")){
            sofaimage.innerHTML='<img src="./images/small-sofa.png"/>'
        }else if(e.target.classList.contains("orange")){
            sofaimage.innerHTML=' <img src="./images/orangeSofa.jfif"/>'
        }else{
            sofaimage.innerHTML='<img src="./images/greenSofa.jfif"/>'
        }

       



    })

})



function renderItems(filteredArray) {
    
    itemsContainer.innerHTML = '';

    if (filteredArray.length === 0) {
        
        let emptydiv=document.createElement('div');
        emptydiv.classList.add('emptydiv');
        emptydiv.textContent='No elements found'
        itemsContainer.appendChild(emptydiv);
    }else{
         filteredArray.forEach(cItem => {
        let itemBox = document.createElement('div');
        itemBox.classList.add('item-box');

        
        let itemBoxPart1 = document.createElement('div');
        itemBoxPart1.classList.add('item-box-part1');
        
       
        if (cItem.box) {
            let boxSpan = document.createElement('span');
            boxSpan.classList.add("boxd");
            boxSpan.textContent = cItem.box;
            boxSpan.style.backgroundColor = cItem.boxColor;
            itemBoxPart1.appendChild(boxSpan);
        }

       
        let imgTick = document.createElement('div');
        imgTick.classList.add('table-tick');
        let itemImg = document.createElement('img');
        itemImg.classList.add('table');
        itemImg.src = cItem.img1;
        imgTick.appendChild(itemImg);

       
        let tickPoints = document.createElement('div');
        tickPoints.classList.add('categoryPionts');

        cItem.color.map((colorItem, index) => {
            let spanItem = document.createElement('span');
            spanItem.style.backgroundColor = colorItem;
            if (index === 0) {
                spanItem.classList.add('showtick');
                let tickDiv = document.createElement('div');
                tickDiv.classList.add('tickdiv');
                let tickIcon = document.createElement('i');
                tickIcon.classList.add('fa-solid', 'fa-check', 'tik');
                tickIcon.style.color = cItem.tckitColor?cItem.tckitColor:"#fff"; 
                tickDiv.appendChild(tickIcon);
                spanItem.appendChild(tickDiv);
            }
            tickPoints.appendChild(spanItem);
            spanItem.addEventListener("click", (e) => {
               
                let allSpans = tickPoints.querySelectorAll('span');
                allSpans.forEach(span => {
                    span.classList.remove('showtick');
                    let tickDiv = span.querySelector('.tickdiv');
                    if (tickDiv) {
                        tickDiv.remove();
                    }
                });

                
                let clickedSpan = e.target;
                clickedSpan.classList.add('showtick');
                let newTickDiv = document.createElement('div');
                newTickDiv.classList.add('tickdiv');
                let newTickIcon = document.createElement('i');
                newTickIcon.classList.add('fa-solid', 'fa-check', 'tik');
                newTickIcon.style.color = cItem.tckitColor ? cItem.tckitColor : "#fff";
                newTickDiv.appendChild(newTickIcon);
                clickedSpan.appendChild(newTickDiv);

                if(index===0){
                    itemImg.src=cItem.img1?cItem.img1:"";
                }else if(index===1){
                    itemImg.src=cItem.img2?cItem.img2:"";
                }else if(index===2){
                    itemImg.src=cItem.img3?cItem.img3:"";
                }
            });
           
        });

        imgTick.appendChild(tickPoints);
        itemBoxPart1.appendChild(imgTick);

        
        let itemBoxPart2 = document.createElement('div');
        itemBoxPart2.classList.add('item-box-part2');
        let spanName = document.createElement('span');
        spanName.textContent = cItem.name;
        itemBoxPart2.appendChild(spanName);

        
        let priceDiv = document.createElement('div');
        priceDiv.classList.add("price");
        let priceH4 = document.createElement('h4');
        priceH4.textContent = cItem.price;
        priceDiv.appendChild(priceH4);
        if (cItem.dis) {
            let discount = document.createElement('p');
            discount.textContent = cItem.dis;
            priceDiv.appendChild(discount);
        }
        itemBoxPart2.appendChild(priceDiv);

       
        itemBox.appendChild(itemBoxPart1);
        itemBox.appendChild(itemBoxPart2);

        
        itemsContainer.appendChild(itemBox);

       
    });}

   
}

document.addEventListener("DOMContentLoaded", () => {
    let defaultArrays=itemArray.filter(item => item.category === "Meja");
    renderItems(defaultArrays);

});


listChoose.forEach(element => {
    element.addEventListener("click", (e) => {
        let filteredArray = itemArray.filter(item => item.category === e.target.innerHTML);
        console.log(filteredArray);
        renderItems(filteredArray);
    });
});






