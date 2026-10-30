const input=
document.getElementById("searchInput");
const output=
document.getElementById("output");
const loginOutput=
document.getElementById("loginOutput");
let timer;
input.addEventListener("input",()=>{
    clearTimeout(timer);
    output.textContent="waiting...";
    timer=setTimeout(()=>{
        output.textContent="Searchimg:"+input.value;
    },500)
});
function login(username,password){
    return new Promise((resolve,reject)=>{
        if(username==="admin"&&password==="1234"){
            resolve("Successful login!")
        }else{
            reject("invalid username or password");
        }
    });
}
login("admin","1234")
.then((result)=>{
    console.log(result);
    loginOutput.textContent=result;
})
.catch((error)=>{
    console.log(error);
    loginOutput.textContent=error;
});