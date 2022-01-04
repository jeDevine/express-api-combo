const myAPI = fetch(`http://localhost:3000/cart-items`).then(res => res.json());
const shownList = document.querySelector(`#shownList`)
myAPI.then(data => {
    for (let i = 0; i < data.length; i++) {
        const box = document.createElement('div');
        box.setAttribute("id", "things");
        box.append(`id: ${data[i].id}  `);
        box.append(`product: ${data[i].product}  `);
        box.append(`price: ${data[i].price}  `);
        box.append(`quantity: ${data[i].quantity}  `);
        shownList.appendChild(box);
    }

    console.log(data);
})