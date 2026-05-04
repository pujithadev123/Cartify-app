let cart_part=document.getElementById("cart-section")

function renderCart(){
let get_data=JSON.parse(localStorage.getItem("cart"))||[]
cart_part.textContent=""
 if(get_data.length===0){
    let err_txt=document.createElement("h2")
    err_txt.textContent="Cart is empty..."
    err_txt.style.color="red"
    cart_part.appendChild(err_txt)
    return
}else{


let headings=["Product","Price","Quantity","Total","Remove"]

let table=document.createElement("table")
table.classList.add("table-style")
let thead=document.createElement("thead")
thead.classList.add("thead-style")
let tr=document.createElement("tr")

  for(let ele of headings){
    let th=document.createElement("th")
    th.textContent=ele
    th.classList.add("th-style")
    tr.appendChild(th)
}
table.appendChild(thead)
thead.appendChild(tr)

let tbody=document.createElement("tbody")
table.appendChild(tbody)
get_data.forEach(element => {
    let trow=document.createElement("tr")
    trow.classList.add("trow-style")

 
    // product data

    let pro_col=document.createElement("td")
    pro_col.classList.add("td-style")
    let box=document.createElement("div")
    box.classList.add("pro_img_box")

    let image=document.createElement("img")
    image.setAttribute("src",`${element.image}`)
    image.classList.add("pro_img_style")

    let text=document.createElement("h4")
    text.textContent=`${element.title}`

    box.append(image,text)
    pro_col.appendChild(box)
    trow.appendChild(pro_col)
    
    // price
     
    let price_data=document.createElement("td")
     price_data.classList.add("td-style")
    price_data.textContent=`\u20B9${element.price}`
    trow.appendChild(price_data)

    // Quantity
    let qua_data=document.createElement("td")
    let qua_box=document.createElement("div")
    qua_box.classList.add("qua_box")
    let in_btn=document.createElement("button")
    in_btn.textContent="+"
    in_btn.classList.add("in_btn")
    let quantity=document.createElement("h4")
    quantity.textContent=`${element.quantity}`
    let dec_btn=document.createElement("button")
    dec_btn.textContent="-"
    dec_btn.classList.add("dec_btn")
    qua_data.classList.add("td-style")
    qua_box.append(in_btn,quantity,dec_btn)
    qua_data.append(qua_box)
    trow.appendChild(qua_data)
    
    //total
    let total=(element.price*element.quantity)
    let total_price=document.createElement("td")
     total_price.classList.add("td-style")
    total_price.textContent=`\u20B9${total}`
    trow.appendChild(total_price)

    //remove
    let remove_data=document.createElement("td")
     remove_data.classList.add("td-style")
    let delete_icon=document.createElement("i")
    delete_icon.className="fa fa-trash"
    delete_icon.classList.add("trash")
    remove_data.appendChild(delete_icon)
    trow.appendChild(remove_data)
    
    
    tbody.appendChild(trow)
    
   //increment button
   in_btn.addEventListener("click",()=>{
    let get_data=JSON.parse(localStorage.getItem("cart"))||[]

    let matched_data=get_data.find((ele)=>ele.id==element.id)

    if(matched_data){
        matched_data.quantity++
        window.localStorage.setItem("cart",JSON.stringify(get_data))
        renderCart()
        updateBadge()
        renderpayment()
    }

   })


   // decrement button

    dec_btn.addEventListener("click",()=>{
    let get_data=JSON.parse(localStorage.getItem("cart"))||[]

    let matched_data=get_data.find((ele)=>ele.id==element.id)

    if(matched_data){
        if(matched_data.quantity>1){
         matched_data.quantity--
        window.localStorage.setItem("cart",JSON.stringify(get_data))
        renderCart()
        updateBadge()
         renderpayment()
        }else{
    let stored_data=JSON.parse(localStorage.getItem("cart"))||[]
    let remaining_data=stored_data.filter((ele)=>ele.id!==element.id)
    window.localStorage.setItem("cart",JSON.stringify(remaining_data))
     
    console.log(stored_data)
    renderCart()
    updateBadge()
    renderpayment()
        }
       
    }

   })
  

  
   
    // delete data
    
    
    remove_data.addEventListener("click",(e)=>{
    let stored_data=JSON.parse(localStorage.getItem("cart"))||[]
    let remaining_data=stored_data.filter((ele)=>ele.id!==element.id)
    window.localStorage.setItem("cart",JSON.stringify(remaining_data))
     
    console.log(stored_data)
    renderCart()
    updateBadge()
    renderpayment()
    });
    
    




   })
    cart_part.appendChild(table)
}
}
renderCart()

// on page load
let badge=document.getElementById("badge")

let get_stored_data=JSON.parse(localStorage.getItem("cart"))||[]
if(get_stored_data.length===0){
    badge.textContent=0
}else{
    let allitems_count=get_stored_data.reduce((acc,curr)=>acc+curr.quantity,0)
    badge.textContent=allitems_count
}



function updateBadge(){
let badge=document.getElementById("badge")

let get_stored_data=JSON.parse(localStorage.getItem("cart"))||[]
if(get_stored_data.length===0){
    badge.textContent=0
}else{
    let allitems_count=get_stored_data.reduce((acc,curr)=>acc+curr.quantity,0)
    badge.textContent=allitems_count
}

}
updateBadge()

let cart_icon=document.getElementById("cart")
let cart_symbol=cart_icon.querySelector("i")
cart_icon.classList.add("cart-icon-style")
cart_symbol.addEventListener("click",()=>{
  window.location.href="./cart.html"
})

//payment
let pay_box=document.getElementById("payment")
let total_details=document.getElementById("total_details")



function renderpayment(){
     let get_cart_data=JSON.parse(localStorage.getItem("cart"))||[]
     if(get_cart_data.length===0){
    pay_box.style.display="none"
}else{
     pay_box.style.display="block"
     let no_of_items=document.createElement("h3")
     let get_items=get_cart_data.reduce((acc,curr)=>acc+curr.quantity,0)
    
     no_of_items.textContent=`Total items:${get_items}`
      let total_items_cost=document.createElement("h3")
     let total_cost=get_cart_data.reduce((acc,curr)=>acc+(curr.quantity*curr.price),0)
    
     total_items_cost.textContent=`Total cost:\u20B9${total_cost.toLocaleString()}`
     let pay_btn=document.createElement("button")
     pay_btn.textContent="Paynow"
     pay_btn.classList.add("pay_btn_style")
     total_details.textContent=""
     total_details.append(no_of_items,total_items_cost,pay_btn)

     let payble_btn=total_details.querySelector("button")
     payble_btn.addEventListener("click",()=>{
       Swal.fire({
  title: "Confirm Payment",
  text: "Do you want to proceed with payment?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#28a745",
  cancelButtonColor: "#d33",
  confirmButtonText: "Pay Now",
  cancelButtonText: "Cancel"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Payment Successful",
      text: "Your order has been placed successfully!",
      icon: "success"
    }).then(()=>{
       localStorage.removeItem("cart")
    renderCart()
    updateBadge()
    renderpayment()
    })
  
  }
}); 
     })
}
     
}
renderpayment()

let logo=document.getElementById("logo")
logo.addEventListener("click",()=>{
    window.location.href="home.html"
})