 let box=document.querySelector(".container");
 async function display()
{
    try{
    let container=await fetch('https://fakestoreapi.com/products');
    let products=await container.json();
    products.forEach((product)=>box.innerHTML+=`<div>  
    <img src=" ${product.image}" alt="${product.title}">
    <h1> Product:${product.title}</h1>
    <p>Price:${product.price}</p>
    <p>${product.description}</p>
    <button onclick="add()">Add to cart</button>
    <br><br>
    <button onclick="buy"> Buy now</button>
    </div>`);
    }
    catch(error)
    {
        console.log(error);
    }


}
display();
function add()
{
    alert("item added to cart");
}
function buy()
{
    alert("Payment Pending");
}