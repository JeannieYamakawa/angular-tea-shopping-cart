//
// first controller happens when user clicks add to cart. it just saves the query to the services object.
//the services object will save the queries and update the cart array to be accessed publicly.
// second controller accesses the values in the service ovbject, THEN in the callback actually does stuff with that info.


app.service('cartPersist', ['$http', function($http){
    this.cart={};
    this.cart.teas=[]; //array of objects. each object contains a tea name, qty, price, and subtotal.
    this.cart.overallTotal=0;
    this.numItemsInBag=0;

    this.storeValues = function(name, price, imageUrl, caffeine, ingredients, rating, qty){
        console.log(qty, 'qty from beginning of first servvice funtion');
        this.current = {};
        if(!qty || qty == ''){
            this.current.qty=1;
        }else{
            this.current.qty = parseInt(qty);
        }
        this.current.name = name;
        this.current.caffeine = caffeine;
        this.current.ingredients = ingredients;
        this.current.rating = rating;
        this.current.imageUrl = imageUrl;
        this.current.price = price/100;
        console.log(this.current, 'this.current after storeValues runs');
        this.current.subtotal = parseInt(this.current.price) * parseInt(this.current.qty);
        return this.updateCart(this.current);
    }


    //happens when user presses add to cart button or when user updates cart on view cart page.
    this.updateCart = function(object){
        // var newTeaObject={};
        var cartTeas = this.cart.teas;
            if(!cartTeas[0]){
                cartTeas[0]={};
                cartTeas[0].name = object.name;
                cartTeas[0].qty = object.qty;
                cartTeas[0].price = object.price;
                cartTeas[0].caffeineScale=object.caffeine;
                cartTeas[0].imageUrl = object.imageUrl;
                cartTeas[0].ingredients = object.ingredients;
                cartTeas[0].rating = object.rating;
                cartTeas[0].subtotal = parseInt(cartTeas[0].qty) * parseInt(cartTeas[0].price);
                this.cart.overallTotal += cartTeas[0].subtotal;
                this.numItemsInBag = 1;
            }else{
                var matchingTea = cartTeas.filter(function(tea){
                    return (tea.name === object.name)
                });
                console.log(matchingTea, 'MATCHING TEA');
                        //if it exists in cart already, update its quantity and subtotal
                    if(matchingTea.length>0){
                        matchingTea[0].qty += object.qty;
                        matchingTea[0].subtotal = parseInt(matchingTea[0].qty) * parseInt(matchingTea[0].price)
                    }else{
                        var newObject ={};
                    newObject.name = object.name;
                    newObject.qty = object.qty;
                    newObject.price = object.price;
                    newObject.caffeineScale=object.caffeine;
                    newObject.ingredients = object.ingredients;
                    newObject.imageUrl = object.imageUrl;
                    newObject.rating = object.rating;
                    newObject.subtotal = parseInt(newObject.qty) * parseInt(newObject.price);
                    this.cart.teas.push(newObject);
                    this.cart.overallTotal += newObject.subtotal;
                    this.numItemsInBag = this.cart.teas.length;
                    console.log(newObject, this.cart.teas);
                    }
                }
            }
}])
