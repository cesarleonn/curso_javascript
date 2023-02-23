let libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "cesar leon",
    edad: 17,
    redes:{
        facebook:"twitter.com",
        tiktok:"tiktok.com"

    },
   
    }

libro.autor.nombre
libro["autor"]["redes"]["twitter"]



const carro1 = {marca: "renault", modelo: "9",}
const carro2 = {marca: "tenault", modelo: "9",}
carro1 === carro2
carro1.marca === carro2.marca
carro3===carro1


"javascript"[2]
"javascript".length
"javascript".charCodeAt(2)
"javascript".indexOf("string")
"javascript".substring(2, 4)

const fecha = new Date ()
fecha.toString().split("")
[4].split(":")[0]