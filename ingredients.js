const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
let text = ""

while(ingredients[i]){
text += ingredients[i];
i++;
}

for (let ingredient of ingredients){
console.log(ingredient)
}

for (let i = ingredients.length-1; i>=0; i--){
console.log(ingredients[i])
}


