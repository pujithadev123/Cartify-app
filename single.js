let url=window.location.search
console.log(url)
let params=new URLSearchParams(url)
let prod_id=params.get("id")

let cards=document.getElementById("single-card")
let Data=[]

// Render cards
async function getdata(){
    let data=await fetch("https://fakestoreapi.com/products")
    let res=await data.json()
    for(let ele of res){
        Data.push(ele)
    }
   console.log(Data)


   let find_card=Data.find((ele)=>ele.id===Number(prod_id))
     display(find_card)
   

}
getdata()


function display(single_card){
cards.textContent=""

    let card=document.createElement("div")
    card.classList.add("box")

    let image_container=document.createElement("div")
    image_container.classList.add("img-style")
    let img=document.createElement("img")
    img.setAttribute("src",`${single_card.image}`)
    img.classList.add("image")
    image_container.appendChild(img)
    card.appendChild(image_container)

    let text=document.createElement("div")
    text.classList.add("text-styles")
    text.innerHTML=`<h4>Title:${single_card.title}</h4><h5>Price:\u20B9${single_card.price}</h5><p style="font-weight:bold">Description:${single_card.description}</p><button class="add-btn" data-id="${single_card.id}">Add to cart</button>`
    card.appendChild(text)
    let add_btn=card.querySelector(".add-btn")
    add_btn.classList.add("add-btn-style")
    
    // let btn=text.querySelector(".buy-btn")
    // btn.classList.add("btn-style")
    cards.appendChild(card)

//    btn.addEventListener("click",(ele)=>{
//     console.log(ele.target.className)
//    })

 }
    



//Add to cart

let badge=document.getElementById("badge")

let get_data=JSON.parse(localStorage.getItem("cart"))||[]
if(get_data.length===0){
    badge.textContent=0
}else{
    let allitems_count=get_data.reduce((acc,curr)=>acc+curr.quantity,0)
    badge.textContent=allitems_count
}

cards.addEventListener("click",(e)=>{

if(e.target.classList.contains("add-btn")){
let click_btn=e.target.dataset.id

let click_data=Data.find((ele)=>ele.id===Number(click_btn))



let cart_data=JSON.parse(localStorage.getItem("cart"))||[]
if(!Array.isArray(cart_data)){
    cart_data=[]
}

let exist=cart_data.find((ele)=>ele.id===click_data.id)
if(exist){
    exist.quantity++
}else{
    let new_obj={}
    new_obj.id=click_data.id
    new_obj.image=click_data.image
    new_obj.title=click_data.title
    new_obj.price=click_data.price
    new_obj.quantity=1
   cart_data.push(new_obj)
}

let allquantity=cart_data.reduce((acc,curr)=>acc+curr.quantity,0)

window.localStorage.setItem("cart",JSON.stringify(cart_data))
console.log(cart)

badge.textContent=allquantity


}
})

let cart_icon=document.getElementById("cart")
let cart_symbol=cart_icon.querySelector("i")
cart_icon.classList.add("cart-icon-style")
cart_symbol.addEventListener("click",()=>{
  window.location.href="./cart.html"
})

let logo=document.getElementById("logo")
logo.addEventListener("click",()=>{
    window.location.href="home.html"
})