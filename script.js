let password_box = document.getElementById("password")
let length = 14

let btn = document.querySelector("button")

let copy_btn = document.getElementById("copy_pass")

let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower_case = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let symbol = "!@#$%^&*()-_=+[]\|{};:/?"

let all_char = upper_case + lower_case +number + symbol

function create_password(){
    let password = ""
    password += upper_case[Math.floor(Math.random() * upper_case.length)]
    password += lower_case[Math.floor(Math.random() * lower_case.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
    
    while(length > password.length){
        password += all_char[Math.floor(Math.random() * all_char.length)]
    }
    password_box.value = password
}

btn.addEventListener("click" , function(){
    create_password()
})

function copy_password(){
    password_box.select()
    document.execCommand("copy")
}

copy_btn.addEventListener("click" , function(){
    copy_password()
})