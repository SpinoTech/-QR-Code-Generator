const main_box=document.querySelector(".main_box");
let btn=document.querySelector(".btn");
let get_input=document.querySelector(".from input");
let qr_code=document.querySelector(".show_QR img")
// const main_box=document.getElementsByClassName("main_box");
// btn=document.getElementsByClassName("btn");

btn.addEventListener("click",()=>{
  let val=get_input.value;
if(!val)return;
// btn.innerText="Generating QR Code...";
  
//   api referance from https://goqr.me/api/doc/create-qr-code/ website.
  
// getting the qr code from google API  
qr_code.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
});
