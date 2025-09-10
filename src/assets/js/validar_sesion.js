//Validar si esxiste un token:
const token = localStorage.getItem("token")

if(!token){
    window.location.href = "../../login.html"
}else{
    const payload = JSON.parse(token)
    if(Date.now() > payload.exp){
        alert("Tu sesión ha expirado")
        window.location.href = "../../login.html"
    }
}