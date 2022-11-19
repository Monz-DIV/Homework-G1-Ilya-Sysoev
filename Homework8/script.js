let rise={
    weight: 1000,
    price: 200,
    calories: 1500,
}
let mutton={
    weight: 300,
    price: 700,
    calories: 2900,
}

let meat={
    weight: 500,
    price: 550,
    calories: 2900,
}

let vegetables={
    weight: 1500,
    price: 300,
    calories: 2900,
}

let dough={
    weight: 300,
    price: 200,
    calories: 2000,
}

let onion={
    weight: 400,
    price: 90,
    calories: 200,
}



let plov=['rise', 'meat', 'vegetables'];
let pozy=['dough','mutton', 'meat', 'onion'];
let pizza=['dough','meat', 'onion','vegetables' ];

let food=['plov', 'pozy', 'pizza'];

food.splice (1, 1); // Удалили из массива обьект позы, со смещением позиции пица на место позы.

pozy.splice (1, 1); // Удалили из состава поз баранину.



food.unshift ('pozy');


let pricePlov=(rise.price+meat.price+vegetables.price);
let pricePozy=(dough.price+mutton.price+meat.price+onion.price);
let pricePizza=(dough.price+meat.price+onion.price+vegetables.price);

let foodPrice=(pricePlov+pricePozy+pricePizza);

n=food.length; // Вводим переменную n- значение которой заввисит от количества блюд.
food.splice(1,n); // Удаляем все блюда из меню кроме первого.


alert(food);