describe('E2E Test for signup address page', () => {
    it('Page should have the right element on original web page', () => {
        browser.url('https://getjerry.com/signup/address');
        expect(browser).toHaveTitleContaining('Personal Insurance Shopper - Jerry');
        const text1 = $('div[class="_aisxhbi"]');
        const text2 = $('._1zijc7l');
        const text3 = $('._f7k9zf2');
        const inputAddress = $('#addressInput');
        const inputAddress2 = $('#addressLine2Input');
        const button = $('#addressSubmitButton');
        inputAddress.waitForExist();
        expect(text1).toBeVisible();
        expect(text1).toHaveTextContaining("We won't visit you, we promise.");
        expect(inputAddress).toBeVisible();
        expect(inputAddress2).toBeVisible();
        expect(text2).toBeVisible();
        expect(text2).toHaveTextContaining("Enter your current address");
        expect(text3).toBeVisible();
        expect(text3).toHaveTextContaining("Enter the address where your vehicles will be primarily garaged and registered.");
        expect(button).toBeVisible();
        expect(button).toBeDisabled();
    })

    it('Enter address information and you will get an available address list and you can select one.', () => {
        browser.url('https://getjerry.com/signup/address');
        expect(browser).toHaveTitleContaining('Personal Insurance Shopper - Jerry');
        const inputAddress = $('#addressInput');
        const inputAddress2 = $('#addressLine2Input');
        const showDropdown = $('label[class*="MuiFormLabel-filled"]')//only after drop down appeared, this class could exist. 
        inputAddress.setValue('new');
        showDropdown.waitForExist(); //Indicates that the drop-down menu appears.                 
     })

     it('Page should have the right element without error information after entered a right address and button should be clickable', () => {
        browser.url('https://getjerry.com/signup/address');
        expect(browser).toHaveTitleContaining('Personal Insurance Shopper - Jerry');
        const text1 = $('div[class="_aisxhbi"]');
        const text2 = $('._1zijc7l');
        const text3 = $('._f7k9zf2');
        const inputAddress = $('#addressInput');
        const inputAddress2 = $('#addressLine2Input');
        const button = $('#addressSubmitButton');
        const predictButton = $('#predictionCorrect');
        const inputHelperText = $('#addressInput-helper-text');
        inputAddress.waitForExist();
        inputAddress.setValue('County Road 4901, Dayton, TX');
        inputAddress2.setValue('Suite 300');
        predictButton.waitForExist();
        predictButton.click();//Select correct button with prompted button after enter the address.
        expect(text1).toBeVisible();
        expect(text1).toHaveTextContaining("We won't visit you, we promise.");
        expect(inputAddress).toBeVisible();
        expect(inputAddress2).toBeVisible();
        expect(text2).toBeVisible();
        expect(text2).toHaveTextContaining("Enter your current address");
        expect(text3).toBeVisible();
        expect(text3).toHaveTextContaining("Enter the address where your vehicles will be primarily garaged and registered.");
        expect(button).toBeVisible();
        expect(button).toBeClickable(); 
        expect(inputHelperText).not.toBeDisplayed();      
     })

     it('When a unavailable address is entered, the page will show an error information and button should be not clickable', () => {
        browser.url('https://getjerry.com/signup/address');
        expect(browser).toHaveTitleContaining('Personal Insurance Shopper - Jerry');
        const inputAddress = $('#addressInput');
        const inputHelperText = $('#addressInput-helper-text');
        const text1 = $('div[class="_aisxhbi"]');
        const button = $('#addressSubmitButton');
        inputAddress.setValue('ssss');
        text1.click(); //Click anywhere outside the input box to trigger the error information prompt.
        inputHelperText.waitForExist();
        expect(inputHelperText).toBeVisible();
        expect(inputHelperText).toHaveTextContaining("Please try typing in your address again and choose it from the available list");
        expect(button).toBeDisabled();      
     })
});


