function ingresar(){
    var usu=document.getElementById("usuario").value;
    var contra=document.getElementById("contraseña").value;
    
    if (usu="anthony") {
        if(contra=123){
            window.open("intranet.html","self")
        } else  alert("contraseña incorrecta")
    } else alert("usuario incorrecto")

}