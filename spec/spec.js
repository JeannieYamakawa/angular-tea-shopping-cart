describe('angular tea shopping cart app', function() {
        fit('should display image, caffeine scale, ingredients, rating', function() {
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

        fit('it should display price in currency', function() {
            browser.get('http://localhost:8000');
            var firstPrice = element( by.repeater( 'tea in teas.teas' ).row(0).column('tea.price') );
            expect( firstPrice.getText() ).toContain( '$15.40' );

        });


        fit('it should display quantity dropdown that updates cart', function() {
            browser.get('http://localhost:8000');
            var firstQuantity = element( by.repeater( 'tea in teas.teas' ).row(0) );
            var addButton = element.all(by.css('.adding')).first();
            var quantityDropdown = element.all(by.css('.quantityopt')).first();
            var checkoutButton = element.all(by.css('.checkout')).first();

            quantityDropdown.sendKeys('6')
            addButton.click()
            expect( checkoutButton.getText() ).toBe( 'Checkout | Cart: 1' );
        });


        fit('it should have whether tea in stock displayed as yes or no', function() {
            browser.get('http://localhost:8000');
            var firstTeaInStock = element( by.repeater( 'tea in teas.teas' ).row(0) )
            expect( firstTeaInStock.getText() ).toContain( 'In Stock: Yes' );
        });


        fit('it should add at least one tea to cart if addToCart button clicked with no quantity specified', function() {
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


        fit('it should filter teas from chosen dropdown option', function() {
            browser.get('http://localhost:8000');
            var categoryDropdown = element(by.css('.category'));
            var teasDisplayed = element.all( by.css( '.singletea' ) );
            categoryDropdown.sendKeys('awesome');
            expect(teasDisplayed.count()).toBe(2);
            expect(teasDisplayed.first().getText()).toContain('Incompactness syrup');
            expect(teasDisplayed.get(1).getText()).toContain('purina chow, flavorings, pepper, acorns, quality tallow')
            });

        fit('it should display teas filtered by text in the search bar', function() {
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

            });

//-----------------on cart page-----------------
//-----------------on cart page-----------------
//-----------------on cart page-----------------

        it('it should preserve quantity of teas in cart on second page', function() {
            browser.get('http://localhost:8000/cart');

        });


        it('it should multiply the quantity by the price and display as subtotal', function() {
            browser.get('http://localhost:8000/cart');
        });


        it('it should have an edit quantity button', function() {
            browser.get('http://localhost:8000/cart');

        });


        it('it should change the edit button text to say save when clicked', function() {
            browser.get('http://localhost:8000/cart');

        });


        it('it should update the quantity, subtotal price, and total price when save is clicked', function() {
            browser.get('http://localhost:8000/cart');

        });


        it('it should have a button that removes the tea from the cart upon click', function() {
            browser.get('http://localhost:8000/cart');

        });


        it('it should update quantity, subtotal price, and total price when item deleted from cart', function() {
            browser.get('http://localhost:8000/cart');

        });

});
