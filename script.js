// get current date
const date = new Date()
document.getElementById("show-date").innerText = date.toLocaleDateString()

// button
let detailSubmitBtn = document.getElementById("detail-submit")
let addProductBtn = document.getElementById("add-product")

// add buyer detail
detailSubmitBtn.addEventListener("click", function(){
    const buyerDetail = document.getElementById("buyer-detail-input")
    document.getElementById("buyer-info").innerText = buyerDetail.value
    buyerDetail.value = ""
})

// add products
addProductBtn.addEventListener("click", function(){
    // product details
    let productInfo = document.getElementById("product-info")
    let productName = document.getElementById("product-name")
    let productPrice = document.getElementById("product-price")
    let productQuantity = document.getElementById("product-quantity")

    // check if product field is empty or not
    if(productName.value == "" || productPrice.value == "" || productQuantity.value == "" || productPrice.value < 0 || productQuantity.value < 0){
        document.getElementById("error-msg").innerText = "Sorry! You can not add"
        return
    }

    // calculate total price
    const totalPrice = parseInt(productPrice.value) * parseInt(productQuantity.value)

    // create table element
    const tr = element("tr")
    const td1 = element("td")
    const td2 = element("td")
    const td3 = element("td")
    const td4 = element("td")

    td4.classList.add("item-total")

    td1.innerText = productName.value
    td2.innerText = productPrice.value
    td3.innerText = productQuantity.value
    td4.innerText = totalPrice

    // appent table element
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    productInfo.appendChild(tr)
    calculateTotal()
})


// create element 
function element(elementName){
    return document.createElement(elementName)
}

// get sub total price
function getSubTotal(){
    let subTotal = 0;
    const cost = document.getElementsByClassName("item-total");
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i]
        const price = parseInt(element.innerText)

        subTotal = subTotal + price
    }
    return subTotal;
}


// get total price
function calculateTotal() {
    const subTotal = getSubTotal();
  
    const subTotalDisplay = document.getElementById("sub-total");
    subTotalDisplay.innerText = subTotal
  
    const vat = subTotal * 0.2
  
    document.getElementById("vat").innerText = vat.toFixed(2)
    document.getElementById("all-total").innerText = subTotal + vat
    document.getElementById("all-total2").innerText = subTotal + vat
}