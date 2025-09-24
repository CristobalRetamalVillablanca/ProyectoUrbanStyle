// Mensaje
const mensajeInput = document.getElementById("mensajeInput")
const mensajeMensaje = document.getElementById("mensajeMensaje")

// Validación nombre
nombreInput.addEventListener("blur", ()=>{
    const nombre = nombreInput.value.trim()
    if (!nombre) {
        mensajeNombre.textContent = "Ingrese algún nombre por favor.";
    } else if (nombre.length < 3) {
        mensajeNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    } else {
        mensajeNombre.textContent = "";
    }
})

// Validación apellido
apellidoInput.addEventListener("blur", ()=>{
    const apellido = apellidoInput.value.trim()
    if (!apellido) {
        mensajeApellido.textContent = "Ingrese su apellido por favor.";
    } else if (apellido.length < 3) {
        mensajeApellido.textContent = "El apellido debe tener al menos 3 caracteres.";
    } else {
        mensajeApellido.textContent = "";
    }
})

// Validación RUN (formato 12345678-9)
runInput.addEventListener("blur", ()=>{
    const run = runInput.value.trim()
    const regexRun = /^\d{7,8}-[0-9kK]$/
    if (!run) {
        mensajeRun.textContent = "Aún no ingresa RUT alguno."
    } else if (!regexRun.test(run)) {
        mensajeRun.textContent = "Ingrese un RUT válido (ej: 12345678-9)."
    } else {
        mensajeRun.textContent = ""
    }
})

// Validación email
emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim();
    const emailConfirmador = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        mensajeEmail.textContent = "Aún no se ingresa dato alguno.";
    } else if (!emailConfirmador.test(email)) {
        mensajeEmail.textContent = "Ingrese un correo válido (ej: usuario@dominio.com).";
    } else {
        mensajeEmail.textContent = "";
    }
});

// Validación teléfono
telefonoInput.addEventListener("blur", () => {
    const telefono = telefonoInput.value.trim();
    const regexChile = /^9\d{8}$/         
    const regexChilePais = /^\+569\d{8}$/ 
    if (!telefono) {
        mensajeTelefono.textContent = "Aún no ingresa dato alguno."
    } else if (!regexChile.test(telefono) && !regexChilePais.test(telefono)) {
        mensajeTelefono.textContent = "Ingrese un número de celular (ej: 912345678 o +56912345678)."
    } else {
        mensajeTelefono.textContent = ""
    }
});

// Validación mensaje
mensajeInput.addEventListener("blur", ()=>{
    const mensaje = mensajeInput.value.trim()
    if(!mensaje){
        mensajeMensaje.textContent = "Ingrese un mensaje por favor."
    } else if (mensaje.length < 10){
        mensajeMensaje.textContent = "El mensaje debe tener al menos 10 caracteres."
    } else {
        mensajeMensaje.textContent = ""
    }
})

// Confirmar botón
btnRegistro.addEventListener("click", ()=>{
    // Trigger blur para validar todos los campos antes de enviar
    nombreInput.dispatchEvent(new Event("blur"))
    apellidoInput.dispatchEvent(new Event("blur"))
    runInput.dispatchEvent(new Event("blur"))
    emailInput.dispatchEvent(new Event("blur"))
    telefonoInput.dispatchEvent(new Event("blur"))
    mensajeInput.dispatchEvent(new Event("blur"))

    // Revisar si hay errores
    if(!mensajeNombre.textContent && !mensajeApellido.textContent && !mensajeRun.textContent &&
       !mensajeEmail.textContent && !mensajeTelefono.textContent && !mensajeMensaje.textContent){
        alert("Mensaje enviado correctamente ✅");
        // Opcional: limpiar formulario
        nombreInput.value = ""
        apellidoInput.value = ""
        runInput.value = ""
        emailInput.value = ""
        telefonoInput.value = ""
        mensajeInput.value = ""
    } else {
        alert("Por favor, corrija los errores antes de enviar.")
    }
})
