let side_menu=document.getElementById("menu")
let menu_icon=side_menu.querySelector("i")
let menu_details=document.getElementById("side-menu")
side_menu.addEventListener("click",(e)=>{
    console.log("clicked")
    console.log(menu_details.classList)
menu_details.classList.toggle("show-menu")
})


let shop_now=document.getElementById("shop-now")
let account_create=document.getElementById("account-create")

shop_now.addEventListener("click",()=>{
  Swal.fire("Please login to continue shopping").then(()=>{
    window.location.href="./login.html"
  }) 
}
)
account_create.addEventListener("click",()=>{
    Swal.fire("Create an account to start your journey").then(()=>{
        window.location.href="./signup.html"
    }) 
})
let login_btn=document.querySelectorAll(".login")
let signup_btn=document.querySelectorAll(".signup")
login_btn.forEach((btn)=>{
btn.addEventListener("click",()=>{
    window.location.href="./login.html"
})
})
signup_btn.forEach((btn)=>{
btn.addEventListener("click",()=>{
    window.location.href="./signup.html"
})
})
