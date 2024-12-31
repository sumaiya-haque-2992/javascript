fetch("product.json")
.then(res => res.json())
.then(data => showData(data))

function showData (product){
    let singleProduct = document.getElementById("grid-product");
    product.forEach((product) =>{
        let productDiv = document.
        createElement("div");
        productDiv.className="product";
        productDiv.innerHTML = `
        <img src=${product.img} alt="">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <P>Price: ${product.price}</p>
        <p>Rating${product.rating}</p>
        <button>Buy</button>
        `
        singleProduct.appendChild(productDiv)
    });
    console.log(product)
};