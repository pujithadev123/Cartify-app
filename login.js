let user_mail=document.getElementById("uemail")
let enter_mail=user_mail.querySelector("input")
let err_txt1=document.getElementById("msg1")

let p1=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
enter_mail.addEventListener("blur",()=>{
    if(enter_mail.value.trim()===""){
     err_txt1.textContent="Enter email here.."
     err_txt1.style.display="block"
    }else{
        if(p1.test(enter_mail.value)){
           err_txt1.style.display="none" 
        }else{
           err_txt1.textContent="Email must be like: example@gmail.com"
           err_txt1.style.display="block"
           err_txt1.style.color="red"
        }
    }
})


let user_pswd=document.getElementById("upswd")
let enter_pswd=user_pswd.querySelector("input")
let err_txt2=document.getElementById("msg2")
let eye_icon=user_pswd.querySelector("i")

let p2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
enter_pswd.addEventListener("blur",()=>{
    if(enter_pswd.value.trim()===""){
     err_txt2.textContent="Enter password here.."
     err_txt2.style.display="block"
    }else{
        if(p2.test(enter_pswd.value)){
           err_txt2.style.display="none" 
        }else{
           err_txt2.textContent="Password must be 8+ characters with uppercase, lowercase, number and special symbol"
           err_txt2.style.display="block"
           err_txt2.style.color="red"
        }
    }
})

eye_icon.addEventListener("click",(e)=>{
    if(enter_pswd.type==="password"){
        e.target.className="fa fa-eye-slash"
        enter_pswd.type="text"
    }else{
         e.target.className="fa-solid fa-eye"
        enter_pswd.type="password"
    }
})

let txt=document.getElementById("last-text")
let login_page=txt.querySelector("a")
login_page.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href="./index.html"
})


let form_data=document.getElementById("myform")
let input_data=form_data.querySelectorAll("input")
console.log(input_data)
let button=document.getElementById("login")
let login_btn=button.querySelector("button")
login_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let isValid=true

     if(enter_mail.value==="" || !(p1.test(enter_mail.value))){
        isValid=false
    }

     if(enter_pswd.value==="" || !(p2.test(enter_pswd.value))){
        isValid=false
    }

    let users=JSON.parse(localStorage.getItem("data"))||[]

    let founduser=users.find((user)=>{
        return (user.email===enter_mail.value && user.password===enter_pswd.value)
    })
    
 
    
      if(!isValid){
     alert("Enter valid inputs")
        return
    }

    if(!founduser){
        isValid=false
        alert("User mail and password is invalid")
        return
    }
    
    enter_mail.value=""
    enter_pswd.value=""
   
    Swal.fire("Login successfully!").then(()=>{
      window.location.href="./home.html"
    })
  


   

})