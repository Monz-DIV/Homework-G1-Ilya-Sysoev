
for (let i = 1; i<=10; i += 2) {
    console.log (i)
}


let j = 1;
while(true) {
    console.log(j);
    if (j===5) {
        break;
    }
    j++;
}




let  ingredients = [ 'rice' ,'vegetables' , 'meat', 'spices', 'dough', 'onion'];
ingredients[0]= 30;
ingredients[1]= 65;
ingredients[2]=120;
ingredients[3]= 12;
ingredients[4]= 25;
ingredients[5]= 15;



let plov = {
    name: 'Плов',
    weightOnePortion: 250,
    ingredients :  ['rice' ,'vegetables' , 'meat', 'spices' ],
    priceSale: 450,
}

let plovPrice = 0;
for (let i=0; i<plov.ingredients.length; i++) {
    plovPrice += ingredients[i];
}
let plovProfit = plov.priceSale - plovPrice;



let pizza = {
    name: 'Пицца',
    weightOnePortion: 400,
    ingredients: [' dough' , 'vegetables' , 'meat'],
    priceSale: 550,
}
let pizzaPrice = 0;
for (let i=0; i<pizza.ingredients.length; i++) {
    pizzaPrice += ingredients[i];
}
let pizzaProfit = pizza.priceSale - pizzaPrice;



let buuzy = {
    name: 'Буузы',
    weightOnePortion: 350,
    ingredients: [' dough' , 'vegetables' , 'meat', 'spices'],
    priceSale:600,
}
let buuzyPrice = 0;
for (let i=0; i<buuzy.ingredients.length; i++) {
    buuzyPrice += ingredients[i];
}
let buuzyProfit = buuzy.priceSale - buuzyPrice;



let pasta = {
    name: 'Паста',
    weightOnePortion: 450,
    ingredients: [' dough' , 'spices'],
    priceSale: 300,
}
let pastaPrice = 0;
for (let i=0; i<pasta.ingredients.length; i++) {
    pastaPrice += ingredients[i];
}
let pastaProfit = pasta.priceSale - pastaPrice;


alert(`Затраты на приготовление плова ${plovPrice} рублей. 
Наш профит с одной порции плова ${plovProfit} рублей` );

alert(`Затраты на приготовление пиццы ${pizzaPrice} рублей. 
Наш профит с одной пиццы ${pizzaProfit} рублей` );


alert(`Затраты на приготовление порции бууз ${buuzyPrice} рублей. 
Наш профит с одной порции бууз ${buuzyProfit} рублей` );


alert(`Затраты на приготовление пасты ${pastaPrice} рублей. 
Наш профит с одной порции пасты ${pastaProfit} рублей` );




