// when a user clicks update cart button on any repeated tea, a new quantity of that specific tea/price/name gets stored publicly available everywhere in the services array of tea objects.
// when a user clicks to view cart, the services stored array of tea objects populates the page.



// first controller happens when user clicks add to cart. it just saves the query to the services object.
//the services object will save the queries and update the cart to be accessed publicly.
// second controller accesses the values in the service ovbject, THEN in the callback actually does stuff with that info.


app.controller('HomeController', ['$scope','$http', '$location', 'cartPersist',// 'caffeineMeter',
function($scope, $http, $location, cartPersist // , caffeineMeter
){


    //calls the service storeValues function.
    $scope.updateCart = function(name, price, imageUrl, caffeine, ingredients, rating, qty){
        $scope.numItemsInBag = cartPersist.numItemsInBag + 1;
        cartPersist.storeValues(name, price, imageUrl, caffeine, ingredients, rating, qty);
    }

    $scope.checkoutClicked = function(){
        $location.path('/cart')
        $scope.numItemsInBag = cartPersist.numItemsInBag
    }



    $scope.teas = {};
    $scope.teas.teas = [
    {
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"]
    },

    {
        "_id": "55c8ee82152165d244b98301",
        "name": "Incompactness syrup",
        "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        "caffeineScale": 49,
        "price": 7348,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98302",
        "name": "Flexner white tea",
        "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
        "caffeineScale": 38,
        "price": 4991,
        "inStock": true,
        "rating": 4,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["cold"]
    },
    {
        "_id": "55c8ee82152165d244b98303",
        "name": "Pressor leaf",
        "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        "caffeineScale": 153,
        "price": 5496,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry", "hot", "awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98304",
        "name": "Flexner veggie tea",
        "ingredients": "cream of tartar, eggplant, cake, deer antler",
        "caffeineScale": 181,
        "price": 2445,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98305",
        "name": "Topflighter malt",
        "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
        "caffeineScale": 241,
        "price": 4486,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
        "__v": 0,
        "categories": ["dry","lucid","warm"]
    },
    {
        "_id": "55c8ee82152165d244b98306",
        "name": "Cooking mix",
        "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
        "caffeineScale": 230,
        "price": 6973,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98307",
        "name": "Cooking stew",
        "ingredients": "eggplant",
        "caffeineScale": 122,
        "price": 6003,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry","winter","lucid"]
    },
    {
        "_id": "55c8ee82152165d244b98308",
        "name": "Prevenient herb tea",
        "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
        "caffeineScale": 196,
        "price": 1374,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
        "__v": 0,
        "categories": ["lucid","hot"]
    },
    {
        "_id": "55c8ee82152165d244b98309",
        "name": "Angular mix",
        "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
        "caffeineScale": 196,
        "price": 4158,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["spring", "warm","winter"]
    }
]
}]);





app.controller('CartController', ['$scope','$http', '$location', 'cartPersist',// 'caffeineMeter',
function($scope, $http, $location, cartPersist // , caffeineMeter
){
    $scope.cart = cartPersist.cart;
    $scope.cart.teas = cartPersist.cart.teas;
    $scope.cart.overallTotal = cartPersist.cart.overallTotal;
    $scope.numItemsInBag = cartPersist.numItemsInBag;

    $scope.nums = [2,3,4,5,6,7,8,9,10]



    $scope.updateCart = function(name, price, imageUrl, caffeine, ingredients, rating, qty){
        cartPersist.storeValues(name, price, imageUrl, caffeine, ingredients, rating, qty);
        $scope.showEdit = !$scope.showEdit;
    }

    $scope.consoleLog = function(){
        console.log($scope.cart.teas);
    }
    $scope.showEdit = false;
    $scope.editClicked = function(){
        console.log('edit clicked');
        $scope.showEdit= !$scope.showEdit;
    }


    $scope.removeFromCart = function(){
        console.log('Removing from cart!');
        console.log(this.tea.name);
        var thisTeaName = this.tea.name
        var arrOfTeas = cartPersist.cart.teas;
        arrOfTeas.forEach(function(tea){
            console.log(tea);
            var teaName = tea.name;
            var matchingIndex = teaName.indexOf(thisTeaName);
            if (teaName.indexOf(thisTeaName) !==-1){
                console.log('removing tea NOW');
                cartPersist.cart.teas.splice(matchingIndex,1)
                console.log(cartPersist.cart.teas, 'cart now updated');
            }
        })
        //find that item in cart with matching name
        //remove that item from cart
    }
}]);















//
