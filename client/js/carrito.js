let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);
    mostrarTablaCompras();
}

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML = "<p>Total: $" + total + "</p>" + "<p>Maximo: $" + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let r of compras) { 
        html += `
            <tr>
            <td>${r.producto}</td>
            <td>${r.precio}</td>
            </tr>
            `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

//Clase 34
/* ME APARECE ESE UNDEFINED
Producto	Precio
Frutas	34
undefined */

/* let url = 'http://localhost:3000/mock.json';
async function load() {
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Loading...</h1>";
    let response = await fetch(url);
    if (response.ok) {
        let t = await response.json(); 
        //Muestro en el Frontend [object Object]
        //container.innerHTML = t;

        //Para mostrar el mock.json en el Frontend
        compras = t.compras; 
        
        console.log(t.compras);
        
        
        container.innerHTML = mostrarTablaCompras(); 
    }
} */

/* async function load() {
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Loading...</h1>";
    try {
        let response = await fetch(url);
        if (response.ok) {
            let t = await response.json()
            //compras = t.compras; 
            compras = [{"producto": producto,"precio": 2},{"producto": producto1,"precio": 1}];
            container.innerHTML = mostrarTablaCompras(); 
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    } catch (error) {
        container.innerHTML = "<h1>Conection Error</h1>";
    }
} */

load();