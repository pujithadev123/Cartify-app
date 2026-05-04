let side_menu=document.getElementById("menu")
let menu_icon=side_menu.querySelector("i")
let menu_details=document.getElementById("side-menu")
side_menu.addEventListener("click",(e)=>{
    console.log("clicked")
    console.log(menu_details.classList)
menu_details.classList.toggle("show-menu")
})

let shop_btn_gparent=document.getElementById("text_btn")
let shop_btn_parent=shop_btn_gparent.querySelector("#btn")
let shop_btn=shop_btn_parent.querySelector("button")
shop_btn.addEventListener("click",()=>{
    window.location.href="./products.html"
})

let logo=document.getElementById("logo")
logo.addEventListener("click",()=>{
    window.location.href="home.html"
})

let product_part=document.getElementById("products")
let err_msg=product_part.querySelector("h3")

let Data=[]

//Render cards
async function getdata(){
    err_msg.style.display="block"
    try{
      let data=await fetch("https://fakestoreapi.com/products")
    let res=await data.json()
//     for(let ele of res){
//         Data.push(ele)
//     }
//    console.log(Data)
    Data=res
   err_msg.style.display="none"
   display(Data.slice(0,8))
    }catch(err){
      alert("something went wrong...")
      err_msg.style.display="none"
    }
   

}
getdata()

function display(filtered_data){
product_part.textContent=""
for(let ele of filtered_data){
    let card=document.createElement("div")
    card.classList.add("box")

    let image_container=document.createElement("div")
    image_container.classList.add("img-style")
    let img=document.createElement("img")
    img.setAttribute("src",`${ele.image}`)
    img.classList.add("image")
    image_container.appendChild(img)
    card.appendChild(image_container)

    let text=document.createElement("div")
    text.classList.add("text-styles")
    text.innerHTML=`<h4>Title:${ele.title}</h4><h5>Price:\u20B9${ele.price}</h5><button class="get-btn" data-id="${ele.id}">Get more</button>`
    card.appendChild(text)
    let btn=text.querySelector(".get-btn")
    btn.classList.add("btn-style")
   product_part.appendChild(card)

//    btn.addEventListener("click",(ele)=>{
//     console.log(ele.target.className)
//    })

 }
    
}
product_part.addEventListener("click",(e)=>{
    if(e.target.classList.contains("get-btn")){
        window.location.href="./products.html"
    }
})

let cart=document.getElementById("cart")
cart.addEventListener("click",(e)=>{
e.preventDefault()
window.location.href="./cart.html"
})


let search_boxes = document.querySelectorAll("#search-bar, .search-bar");

search_boxes.forEach((box) => {
    let input = box.querySelector("input");
    let icon = box.querySelector("i");

    icon.addEventListener("click", () => {
        if (input.value.trim() !== "") {
            console.log("clicked");
            window.location.href = "./products.html";
        } else {
            alert("search anything...");
        }
    });
});

let contact_name=document.getElementById("contact_name")
let contact_mail=document.getElementById("contact_mail")
let contact_number=document.getElementById("phone_num")
let contact_msg=document.getElementById("sent_msg")


let sent_btn=document.getElementById("sent_btn")
sent_btn.addEventListener("click",(e)=>{
    e.preventDefault()
if(contact_mail.value==="" || contact_number.value==="" || contact_name.value==="" || contact_msg.value==="" ){
    alert("Fill the form ....")
}else{
alert("feedback is recieved...")
contact_name.value=""
contact_msg.value=""
contact_mail.value=""
contact_number.value=""
}

})





