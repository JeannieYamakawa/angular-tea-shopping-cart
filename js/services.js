//
// first controller happens when user clicks add to cart. it just saves the query to the services object.
//the services object will save the queries and update the cart array to be accessed publicly.
// second controller accesses the values in the service ovbject, THEN in the callback actually does stuff with that info.


app.service('cartPersist', ['$http', function($http){

    this.storeValues = function(name, qty, price){
        this.current.name = name;
        this.current.qty = qty;
        this.current.price = price/100;
        this.updateCart();
    }

    this.cart={};
    this.cart.teas=[]; //array of objects. each object contains a tea name, qty, price, and subtotal.
    this.cart.overallTotal=0;
    this.numItemsInBag=0;






    this.updateCart = function(){
        //happens when user presses add to cart button
        var newTeaObject={};
        this.cart.teas.forEach(function(tea){
            if(tea.name==this.current.name){
                //update existing tea quantity in cart
                tea.qty = this.current.qty;
                tea.subtotal = tea.price * tea.qty
            }else{
                //populate the newTeaObject
                newTeaObject.name = this.current.name;
                newTeaObject.qty = this.current.qty;
                newTeaObject.price = this.current.price;
                newTeaObject.subtotal = newTeaObject.qty * newTeaObject.price;
                this.cart.teas.push(newTeaObject);
                this.cart.overallTotal += newTeaObject.subtotal;
                this.numItemsInBag = this.cart.teas.length;
            }
        })
        //grabs the tea.name from the repeater. saves this name as a new object inside this.cart.teas array
        //grabs the qty from the dropdown, also saves this value inside this.cart as this.cart.teas.qty
        //grabs the price from the repeater, also saves this value inside this.cart as this.cart.price
        //multiplies qty and price and saves value inside this.cart as this.cart.teas.subtotal
        //adds this.cart.teas.subtotal number to this.cart.overallTotal number
        //this.numItemsInBag++ each time clicked

    };


    this.viewCartPageChange = function(){
        $location.path('/results')
    };




}])
