let data = [];

for (let i = 0; i < Infinity; i++) {
    let dataEnter = prompt('Введите команду и значение!', 'add, del or stop!');
    if (dataEnter.indexOf('add, ') == 0) {
        data.push(dataEnter.split('add, '));
    } else if (dataEnter.indexOf('add,') == 0) {
        data.push(dataEnter.split('add,'));
    } else if (dataEnter.indexOf('del, ') == 0) {
        data.pop();
    } else if (dataEnter.indexOf('del,') == 0) {
        data.pop();
    } else if (dataEnter.indexOf('stop') == 0) {
        console.log(data);
        break;
    } else {
        console.log(`
            ERROR!!!
        `);
    }
}