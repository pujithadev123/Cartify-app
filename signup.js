let user_name=document.getElementById("uname")
let enter_name=user_name.querySelector("input")
let err_txt1=document.getElementById("msg1")

let p1=/^[a-zA-Z]{3,}$/
enter_name.addEventListener("blur",()=>{
    if(enter_name.value.trim()===""){
     err_txt1.textContent="enter name here.."
     err_txt1.style.display="block"
    }else{
        if(p1.test(enter_name.value)){
           err_txt1.style.display="none" 
        }else{
           err_txt1.textContent="Only letters are allowed and it should be minimum 3 characters"
           err_txt1.style.display="block"
           err_txt1.style.color="red"
        }
    }
})

let user_mail=document.getElementById("uemail")
let enter_mail=user_mail.querySelector("input")
let err_txt2=document.getElementById("msg2")

let p2=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
enter_mail.addEventListener("blur",()=>{
    if(enter_mail.value.trim()===""){
     err_txt2.textContent="Enter email here.."
     err_txt2.style.display="block"
    }else{
        if(p2.test(enter_mail.value)){
           err_txt2.style.display="none" 
        }else{
           err_txt2.textContent="Email must be like: example@gmail.com"
           err_txt2.style.display="block"
           err_txt2.style.color="red"
        }
    }
})


let user_pswd=document.getElementById("upswd")
let enter_pswd=user_pswd.querySelector("input")
let err_txt3=document.getElementById("msg3")
let eye_icon1=user_pswd.querySelector("i")

let p3=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
enter_pswd.addEventListener("blur",()=>{
    if(enter_pswd.value.trim()===""){
     err_txt3.textContent="Enter password here.."
     err_txt3.style.display="block"
    }else{
        if(p3.test(enter_pswd.value)){
           err_txt3.style.display="none" 
        }else{
           err_txt3.textContent="Password must be 8+ characters with uppercase, lowercase, number and special symbol"
           err_txt3.style.display="block"
           err_txt3.style.color="red"
        }
    }
})

eye_icon1.addEventListener("click",(e)=>{
    if(enter_pswd.type==="password"){
        e.target.className="fa fa-eye-slash"
        enter_pswd.type="text"
    }else{
         e.target.className="fa-solid fa-eye"
        enter_pswd.type="password"
    }
})

let user_cpswd=document.getElementById("cpswd")
let enter_cpswd=user_cpswd.querySelector("input")
let err_txt4=document.getElementById("msg4")
let eye_icon2=user_cpswd.querySelector("i")

enter_cpswd.addEventListener("blur",()=>{
    if(enter_cpswd.value.trim()===""){
     err_txt4.textContent="Enter confirm password here.."
     err_txt4.style.display="block"
    }else{
        if(enter_pswd.value===enter_cpswd.value){
           err_txt4.style.display="none" 
        }else{
           err_txt4.textContent="Passwords do not match"
           err_txt4.style.display="block"
           err_txt4.style.color="red"
        }
    }
})

eye_icon2.addEventListener("click",(e)=>{
    if(enter_cpswd.type==="password"){
        e.target.className="fa fa-eye-slash"
        enter_cpswd.type="text"
    }else{
         e.target.className="fa-solid fa-eye"
        enter_cpswd.type="password"
    }
})

let txt=document.getElementById("last-text")
let login_page=txt.querySelector("a")
login_page.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href="./login.html"
})

let form_data=document.getElementById("myform")
let input_data=form_data.querySelectorAll("input")
console.log(input_data)
let button=document.getElementById("signup")
let signup_btn=button.querySelector("button")
signup_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let isValid=true

    if(enter_name.value==="" || !(p1.test(enter_name.value))){
        isValid=false
    }
    

     if(enter_mail.value==="" || !(p2.test(enter_mail.value))){
        isValid=false
    }

     if(enter_pswd.value==="" || !(p3.test(enter_pswd.value))){
        isValid=false
    }

     if(enter_pswd.value!==enter_cpswd.value){
        isValid=false
    }
      if(!isValid){
     alert("Enter valid inputs")
        return
    }
    if(isValid){
      let user_data={}
    
    user_data.name=input_data[0].value
    user_data.email=input_data[1].value
    user_data.password=input_data[2].value
    console.log(user_data)
    
    let user_info=JSON.parse(localStorage.getItem("data"))||[]
    if (!Array.isArray(user_info)) {
    user_info = []
    }
    user_info.push(user_data)
    window.localStorage.setItem("data",JSON.stringify(user_info))


    enter_name.value=""
    enter_mail.value=""
    enter_pswd.value=""
    enter_cpswd.value=""
    
    Swal.fire("Signup successfully!").then(()=>{
      window.location.href="./login.html"
    })
 

    }


   

})