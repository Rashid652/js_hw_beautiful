user = {};

for(let l=1;l<=10;l++){
    user[l] = {}
    user[l].name = prompt('Введите имя');
    user[l].age = +prompt('Введите возраст');
}

for(let key in user){
    console.log(`Пользователь ${key}`);
    console.log(`Ваше имя ${user[key].name}`);
    console.log(`Ваш возраст ${user[key].age}`);
}
console.log(user);
