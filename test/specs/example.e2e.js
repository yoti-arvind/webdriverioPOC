const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const MainPage = require('../pageobjects/main.page');
const dynamicLoadingPage = require('../pageobjects/dynamic-loading.page');
const AddRemoveElemetsPage = require('../pageobjects/addRemoveElement');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('Should Logout and verify the alert message', async () => {

        const Logout = await SecurePage.logoutBtn;
        await Logout.click();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged out of the secure area!');

       // ==========Below code is writtern  without page object Module ==========
    
       /* const btnLogout =  await $('a[href="/logout"]');
        const flashAlert1 =  $('#flash');
        await btnLogout.click();
        await expect(flashAlert1).toHaveTextContaining("You logged out of the secure area!")
        */

    });

    it('verify list', async () => {
        await MainPage.open();
        const list = await MainPage.listExamples;
        //await expect(await list).toHaveLength(10)
       // await expect(MainPage.listExamples).toBeElementsArrayOfSize(44) 
       await expect(MainPage.listExamples).toBeElementsArrayOfSize( { gte: 1} );
    })

     it('Verify loading test message', async () => {
        await dynamicLoadingPage.open();
        const clickStartButton = await dynamicLoadingPage.btnStart;
        await clickStartButton.click();
       //await browser.pause(10000);
        const waitFunciton = await dynamicLoadingPage.elementLoading;
        await waitFunciton.waitForDisplayed({ timeout: 5000});
        await waitFunciton.waitForDisplayed({reverse: true});
        const BeforeConvert = await dynamicLoadingPage.textFinish;
        const afterConvert = BeforeConvert.getText();
        await expect (await afterConvert).toEqual('Hello World!');
    })

    // it('mocking with abort', async() => {
    //     const mock = await browser.mock('https://webdriver.io');
    //     await mock.abortOnce("Failed");
    //     await browser.url('https://webdriver.io')
    //     .catch(() => {} )
    //     console.log(browser.getTitle());
    //     await browser.url('https://webdriver.io')
    //     console.log(browser.getTitle());
    //     browser.debug(); 
    // })
});

describe('Add remove element test cases', () => {
    it('Adding element in the page', async() => {
        await AddRemoveElemetsPage.open();
        const clickAddElementBtn = await AddRemoveElemetsPage.addElement;
        await browser.pause(5000);
        for(let clickButton = 0; clickButton < 5; clickButton++){
            clickAddElementBtn.click()
            console.log(clickButton);
            await browser.pause(5000);
        }
        const deleteBtn = await AddRemoveElemetsPage.deleteElement;
        let ButtonDisplayed = deleteBtn.waitForDisplayed({ timeout: 5000});
        //await expect(AddRemoveElemetsPage.deleteElement).toBeElementsArrayOfSize( { gte: 1} );
        console.log("Element Displayed", ButtonDisplayed);
    })
})
