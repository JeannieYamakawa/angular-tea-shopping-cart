//
// first controller happens when user clicks add to cart. it just saves the query to the services object.
//the services object will save the queries and update the cart array to be accessed publicly.
// second controller accesses the values in the service ovbject, THEN in the callback actually does stuff with that info.


app.service('cartPersist', ['$http', function($http){
    this.cart={};
    this.cart.teas=[]; //array of objects. each object contains a tea name, qty, price, and subtotal.
    this.cart.overallTotal=0;
    this.numItemsInBag=0;

    this.storeValues = function(name, price, caffeine, ingredients, rating, qty){
        this.current = {};
        if(!qty || qty == ''){
            this.current.qty=1;
        }else{
            this.current.qty = qty;
        }
        this.current.name = name;
        this.current.caffeine = caffeine;
        this.current.ingredients = ingredients;
        this.current.rating = rating;
        this.current.price = price/100;
        return this.updateCart();
    }


    this.updateCart = function(){
        //happens when user presses add to cart button
        var newTeaObject={};
        var cartTeas = this.cart.teas;
        if(cartTeas.length !== 0){
            console.log(cartTeas, 'cartTeas from if block');
                for(var i =0; i<cartTeas.length; i++){
                    //if it already exists in the cart, update the quantity
                    if(cartTeas[i].name.indexOf(this.current.name)!== -1){
                        cartTeas[i].qty = this.current.qty +1;
                        cartTeas[i].subtotal = cartTeas[i].price * cartTeas[i].qty
                    }else{
                        //if tea doesnt already exist in cart, create new tea object and push into array
                        newTeaObject.name = this.current.name;
                        newTeaObject.qty = this.current.qty;
                        newTeaObject.price = this.current.price;
                        newTeaObject.caffeineScale=this.current.caffeine;
                        newTeaObject.ingredients = this.current.ingredients;
                        newTeaObject.rating = this.current.rating;
                        newTeaObject.subtotal = newTeaObject.qty * newTeaObject.price;
                        // console.log(newTeaObject, 'newTeaObject');
                        this.cart.teas.push(newTeaObject);
                        this.cart.overallTotal += newTeaObject.subtotal;
                        // console.log(this.cart.overallTotal, 'this.cart.overallTotal');
                        this.numItemsInBag = this.cart.teas.length;
                    }
                }
        }else{
            console.log(cartTeas, 'cartTeas from else block');
                //populate the newTeaObject
                cartTeas[0]={};
                cartTeas[0].name = this.current.name;
                cartTeas[0].qty = this.current.qty;
                cartTeas[0].price = this.current.price;
                cartTeas[0].caffeineScale=this.current.caffeine;
                cartTeas[0].ingredients = this.current.ingredients;
                cartTeas[0].rating = this.current.rating;
                cartTeas[0].subtotal = newTeaObject.qty * newTeaObject.price;
                this.cart.overallTotal += cartTeas[0].subtotal;
                // console.log(this.cart.overallTotal, 'this.cart.overallTotal');
                this.numItemsInBag = cartTeas.length;
                console.log(this.numItemsInBag, 'number of items in bag');
            }
        //grabs the tea.name from the repeater. saves this name as a new object inside this.cart.teas array
        //grabs the qty from the dropdown, also saves this value inside this.cart as this.cart.teas.qty
        //grabs the price from the repeater, also saves this value inside this.cart as this.cart.price
        //multiplies qty and price and saves value inside this.cart as this.cart.teas.subtotal
        //adds this.cart.teas.subtotal number to this.cart.overallTotal number
        //this.numItemsInBag++ each time clicked

    }



}])
