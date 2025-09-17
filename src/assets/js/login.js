const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(email==="admin@gmail.com" && password==="00000000"){
        //un payload es la informacion que almaceno en un Token:
        const payload = {
            email,
            rol: "admin",
            exp: Date.now() + (60000*15)
        }
        //crearemos el token con su informacion
        const token = btoa( JSON.stringify(payload))
        localStorage.setItem("token",token)
        window.location.href = "src/admin/admin.html"
    }

})