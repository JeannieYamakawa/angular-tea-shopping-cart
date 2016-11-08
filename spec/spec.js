describe('angular tea shopping cart app homepage', function() {
        it('should display image, caffeine scale, ingredients, rating', function() {
            browser.get('http://localhost:8000');
            var firstTea =  element( by.repeater( 'tea in teas.teas' ).row(0) )

            // Returns the SPAN for the first cat's name.
        // var firstCatName = element(by.repeater('cat in pets').row(0).column('cat.name'));
            var firstTitle = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.name') )
            var firstImageUrl = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.imageUrl') )
            var firstCaffeineScale = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.caffeineScale') )
            var firstIngredientsList = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.ingredients') )
            var firstRating = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.rating') )
            expect( firstTitle.getText() ).toContain( 'Bayard stew' );
            // expect(  ).toBe( '1' );

        });

        it('it should display price in currency', function() {
            browser.get('http://localhost:8000');
            var firstPrice = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.price') );
            expect( firstPrice.getText() ).toContain( '$15.40' );

        });


        it('it should display quantity dropdown that updates cart', function() {
            browser.get('http://localhost:8000');
            var firstQuantity = element( by.repeater( 'tea in teas.teas' ).row(0) );
            var addButton = element.all(by.css('.adding')).first();
            var quantityDropdown = element.all(by.css('.quantityopt')).first();
            var checkoutButton = element.all(by.css('.checkout')).first();

            quantityDropdown.sendKeys('6')
            addButton.click()
            expect( checkoutButton.getText() ).toBe( 'Checkout | Cart: 1' );
        });


        it('it should have whether tea in stock displayed as yes or no', function() {
            browser.get('http://localhost:8000');
            var firstTeaInStock = element( by.repeater( 'tea in teas.teas' ).row(0) )
            expect( firstTeaInStock.getText() ).toContain( 'In Stock: Yes' );
        });


        it('it should add at least one tea to cart if addToCart button clicked with no quantity specified', function() {
            browser.get('http://localhost:8000');
            var firstQuantity = element( by.repeater( 'tea in teas.teas' ).row(0) );
            var secondQuantity = element( by.repeater( 'tea in teas.teas' ).row(1) );
            var addButton = element.all(by.css('.adding')).first();
            var secondTeaAddButton = element.all(by.css('.adding')).get(1);
            var checkoutButton = element.all(by.css('.checkout')).first();

            addButton.click();
            secondTeaAddButton.click();
            expect( checkoutButton.getText() ).toBe( 'Checkout | Cart: 2' );

            });


        it('it should filter teas from chosen dropdown option', function() {
            browser.get('http://localhost:8000');
            var categoryDropdown = element(by.css('.category'));
            var teasDisplayed = element.all( by.css( '.singletea' ) );
            categoryDropdown.sendKeys('awesome');
            expect(teasDisplayed.count()).toBe(2);
            expect(teasDisplayed.first().getText()).toContain('Incompactness syrup');
            expect(teasDisplayed.get(1).getText()).toContain('purina chow, flavorings, pepper, acorns, quality tallow')
            });

        it('it should display teas filtered by text in the search bar', function() {
            browser.get('http://localhost:8000');
            var searchBar = element(by.css('.searchBar'));
            var teasDisplayed = element.all( by.css( '.singletea' ) );
            searchBar.sendKeys('Angular');
            expect(teasDisplayed.count()).toBe(1);

            searchBar.clear();
            searchBar.sendKeys('cream');
            expect(teasDisplayed.count()).toBe(4);
            expect(teasDisplayed.get(1).getText()).toContain('Flexner veggie tea')
            expect(teasDisplayed.get(3).getText()).toContain('cream of tartar, cream of cream, kitchen scraps, flavorings')
            });

        it('it should sort teas by price, both lowest and highest', function() {
            browser.get('http://localhost:8000');
            var lowest = element( by.cssContainingText('option', 'Lowest') );

            lowest.click();
            var teasDisplayed = element.all( by.css( '.singletea' ) );
            expect(teasDisplayed.first().getText()).toContain('Prevenient herb tea');
            expect(teasDisplayed.get(2).getText()).toContain('Flexner veggie tea');
            expect(teasDisplayed.last().getText()).toContain('Incompactness syrup');

            var highest = element( by.cssContainingText('option', 'Highest') );
            highest.click();
            expect(teasDisplayed.first().getText()).toContain('Incompactness syrup');
            expect(teasDisplayed.last().getText()).toContain('Prevenient herb tea');
            });


        it('it should redirect when checkout button clicked', function() {
            browser.get('http://localhost:8000');
            var addButton = element.all(by.css('.adding')).first();
            var quantityDropdown = element.all(by.css('.quantityopt')).first();
            var checkoutButton = element.all(by.css('.checkout')).first();

            quantityDropdown.sendKeys('6');
            addButton.click();

            checkoutButton.click();
            expect(  browser.getCurrentUrl()  ).toContain('cart')
        });
});

describe('angular tea shopping cart app page two', function() {

    beforeEach(function(){
        browser.get('http://localhost:8000');
        var addButton = element.all(by.css('.adding')).first();
        var secondAddButton = element.all(by.css('.adding')).get(1);
        var thirdAddButton = element.all(by.css('.adding')).get(3);
        var quantityDropdown = element.all(by.css('.quantityopt')).first();
        var secondQuantity = element.all(by.css('.quantityopt')).get(1);
        var thirdQuantity = element.all(by.css('.quantityopt')).get(3)
        var checkoutButton = element(by.css('.checkout'));
        var teas = element.all(by.css('.tearepeat'));
        quantityDropdown.sendKeys('6');
        secondQuantity.sendKeys('3');
        thirdQuantity.sendKeys('4');
        addButton.click();
        secondAddButton.click();
        thirdAddButton.click();
        checkoutButton.click();
    });

        it('it should preserve quantity of teas in cart on second page', function() {
            expect(browser.getCurrentUrl()).toContain('cart');
            var teasDisplayed = element.all(by.css('.tearepeater') );
            var subtotals =  element.all(by.css('.subtotal'));
            var quantities = element.all(by.css('.quantity'));
            expect( teasDisplayed.first().getText() ).toContain('concentrated gluten');
            expect(teasDisplayed.get(1).getText()).toContain("Ingredients: fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney");
            expect(quantities.first().getText()).toBe('6');
            expect(quantities.get(1).getText()).toBe('3');
            expect(quantities.get(2).getText()).toBe('4');
        });


        it('it should multiply the quantity by the price and display as subtotal', function() {
            var teasDisplayed = element.all(by.css('.tearepeater') );
            var subtotals =  element.all(by.css('.subtotal'));
            var quantities = element.all(by.css('.quantity'));
            expect( teasDisplayed.first().getText() ).toContain('concentrated gluten');
            expect (subtotals.first().getText()).toBe('$92.40');
            expect(subtotals.get(1).getText()).toBe('$220.44');
            expect(subtotals.get(2).getText()).toBe('$219.84');
        });


        it('it should have an edit quantity button for each item in cart', function() {
            var editButtons = element.all(by.css('.edit'));
            expect(editButtons.count()).toBe(3);
            expect(editButtons.first().getText()).toBe('edit');
        });


        it('it should update the quantity, subtotal price, and total price when Update Quantity button clicked', function() {
            var editButtons = element.all(by.css('.edit'));
            var updateButton = element.all(by.css('.updatebutton')).first()
            var subtotals =  element.all(by.css('.subtotal'));
            var quantities = element.all(by.css('.quantity'));
            var overallTotal = element(by.css('.overalltotal'));
            editButtons.first().click()
            var updateDropdown = element.all(by.css('.hiddenupdate')).first();
            updateDropdown.sendKeys('9');
            updateButton.click();
            expect(quantities.first().getText()).toBe('9');
            expect(subtotals.first().getText()).toBe('$138.60');
            expect(overallTotal.getText()).toContain('$578.88');
            
        });


        fit('it should have a button that removes the tea from the cart upon click', function() {
            var teasDisplayed = element.all(by.css('.tearepeater') );
            var removeButtons = element.all(by.css('.remove'));
            removeButtons.first().click();
            expect(teasDisplayed.count()).toBe(2);

        });


        it('it should update quantity, subtotal price, and total price when item deleted from cart', function() {

        });

});
