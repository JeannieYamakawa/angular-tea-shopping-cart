app.service('omdbSearch', ['$http', function($http){
    // this.results = [];
    this.search = function(query){
        //line below assigns the parameter to a property on the service object
        this.query = query
    }


    this.results = function(){
        console.log(this.query);
        //line below uses the saved query to search omdb
        return $http.get('http://www.omdbapi.com/?s=' + this.query)
    }

}]);

app.service('cartPersist', ['$http', function($http){
    // incorrect storage, not necessary function below
    // this.saveValues = function(name, qty, price){
    //     this.cart.teas.name = name;
    //     this.cart.teas.qty = qty;
    //     this.cart.teas.price = price;
    // }

    this.cart={};
    this.cart.teas=[]; //array of objects. each object contains a tea name, qty, price, and subtotal.
    this.cart.overallTotal=0;
    this.numItemsInBag=0;

    this.updateCart = function(teaType, qty, price){
        //happens when user presses add to cart button
        var newTeaObject={};
        this.cart.teas.forEach(function(tea){
            if(tea.name==teaType){
                //update existing tea quantity in cart
                tea.qty = qty;
                tea.subtotal = tea.price * tea.qty
            }else{
                //populate the newTeaObject
                newTeaObject.name = teaType;
                newTeaObject.qty = qty;
                newTeaObject.price = price/100;
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




}])
