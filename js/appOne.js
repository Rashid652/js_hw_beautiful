let dataUsers = {};
let id = 0;

dataUsers['user_1'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_2'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_3'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_4'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_5'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_6'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_7'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_8'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_9'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

dataUsers['user_10'] = {
    name: prompt('Введите имя!', 'Иван'),
    age: +prompt('Введите возраст!', '35')
}

for(let key in dataUsers) {
    console.log(`Пользователь ${++id}`);
    for(let newKey in dataUsers[key]) {
        console.log(dataUsers[key][newKey]);
    }
}