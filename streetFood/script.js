class Burger{
    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.price = 0;
        this.calories = 0;
        this.toppings = [];

        if (size == 'big'){
            this.price = 100;
            this.calories = 40;
        } else if (size == 'small'){
            this.price = 50;
            this.calories = 20;
        }

        if (stuffing == 'chees'){
            this.price += 10;
            this.calories += 20;
        } else if (stuffing == 'salat'){
            this.price += 20;
            this.calories += 5;
        } else if (stuffing == 'patato'){
            this.price += 15;
            this.calories += 10;
        }
    }
    addTopping(topping){
        if (topping == 'paprica') {
            this.price += 15;
            this.toppings.push('paprica');
        } else if (topping == 'sous'){
            this.price += 20;
            this.calories += 5;
            this.toppings.push('sous');
        }
        return this.toppings;
    }
    removeTopping(topping){
        if (topping == 'paprica') {
            this.price -= 15;

            for( let i = 0; i < this.toppings.length; i++){ 
    
                if ( this.toppings[i] === 'paprica') { 
            
                    this.toppings.splice(i, 1); 
                }
            
            }

        } else if (topping == 'sous'){
            this.price -= 20;
            this.calories -= 5;

            for( let i = 0; i < this.toppings.length; i++){ 
    
                if ( this.toppings[i] === 'sous') { 
            
                    this.toppings.splice(i, 1); 
                }
            
            }
        }
        return this.toppings;
    }
    getToppings(){
        this.toppings.forEach(topping => {
            console.log(topping);
        });
        return;
    }
    getSize(){
        return this.size;
    }
    getSize(){
        return this.stuffing;
    }
    calculatePrice(){
        return this.price;
    }
    calculateCalories(){
        return this.calories;
    }
}

const newBurger = new Burger('small','salat');