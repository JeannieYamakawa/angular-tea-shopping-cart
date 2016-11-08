//
// first controller happens when user clicks add to cart. it just saves the query to the services object.
//the services object will save the queries and update the cart array to be accessed publicly.
// second controller accesses the values in the service ovbject, THEN in the callback actually does stuff with that info.


app.service('cartPersist', ['$http', function($http){
    this.cart={};
    this.cart.teas=[]; //array of objects. each object contains a tea name, qty, price, and subtotal.
    this.cart.overallTotal=0;
    this.numItemsInBag=0;

    this.storeValues = function(tea, qty){
        // console.log(tea, 'tea from store vals');
        if(!qty || qty === ''){
            tea.qty =1;
        }else{
            tea.qty = parseFloat(qty);
            }
        tea.subtotal = parseFloat(tea.price/100) * parseFloat(tea.qty);
            return this.updateCart(tea);
    }

    this.updateCart = function(object){
        // console.log(object.subtotal,'object from second funct')
        var cartTeas = this.cart.teas;
        var newTotal;
        //if no teas in cart
        if(!cartTeas[0]){
            cartTeas[0]= object;
            this.cart.overallTotal += cartTeas[0].subtotal;
            this.numItemsInBag = 1;
        }else{
            //update existing tea qty with same name
            var matchingTea = cartTeas.filter(function(aTea){
                // console.log(aTea.name===object.name, 'asklakjsd match ');
                return (aTea.name===object.name)
            })
            // console.log(matchingTea, 'MATCHING TEA');
            if(matchingTea.length>0){
                matchingTea[0].qty = object.qty;
                matchingTea[0].subtotal = parseFloat(matchingTea[0].qty) * parseFloat(matchingTea[0].price/100)
                newTotal = cartTeas.map(function(tea1) {return tea1.subtotal})
                            .reduce(function(a,b) {return a + b;});
                // console.log(newTotal, 'newTotal1');
                this.cart.overallTotal = newTotal;
                this.numItemsInBag = this.cart.teas.length;
                //if no tea exists in cart with same name, below
            }else{
                this.cart.teas.push(object);
                // console.log(this.cart.teas, 'this.cart.teas');

                newTotal = cartTeas.map(function(tea1) {return tea1.subtotal})
                            .reduce(function(a,b) {return a + b;});
                // console.log(newTotal, 'newTotal2');

                this.cart.overallTotal = newTotal;

                this.numItemsInBag = this.cart.teas.length;
            }

        }
    }


}])
