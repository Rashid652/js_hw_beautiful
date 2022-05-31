let getReceipt = receipt();
let delivery = 9000;
let sum = delivery;

let data = [];
for (let key in getReceipt) {
    data.push(`${key} ${getReceipt[key].info}`);
    sum += getReceipt[key].price;
}

console.log(
    `
    Вы заказали ${data.join()} | Чек: ${sum} сумм с доставкой 9000 сумм
    `
);