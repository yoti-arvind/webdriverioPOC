const ModalPage = require('../pageobjects/modal.page');

describe('Modals exampleas', () => {
    beforeEach(async() => {
        await ModalPage.open();
    })
    it('Auto modal open on page visit examples', async() => {
       //await ModalPage.open();
        const waitElemetToLoad = await ModalPage.ModalTitle;
        await waitElemetToLoad.waitForDisplayed({ timeout: 5000});
        await expect(ModalPage.ModalTitle).toHaveTextContaining(
            'THIS IS A MODAL WINDOW');
    })

    it('Close the model which is opened on page visit', async() => {
        //await ModalPage.open();
        const waitCloseLinkToLoad = await ModalPage.closeLink;
        await waitCloseLinkToLoad.waitForDisplayed({timeout: 5000})
       // await browser.pause(10000);
        await waitCloseLinkToLoad.click();    
    })

    it('Reopoen the model and close the', async() => {
       //await ModalPage.open();
        const waitCloseLinkToLoad = await ModalPage.closeLink;
        await waitCloseLinkToLoad.waitForDisplayed({timeout: 5000})
       // await browser.pause(10000);
        await waitCloseLinkToLoad.click(); // till here code execurte for close
        
        const waitRetryLinkToLoad = await ModalPage.RetryLink;
        await waitRetryLinkToLoad.waitForDisplayed({timeout: 5000});
        await waitRetryLinkToLoad.click();
        await browser.refresh();
        const newCloseLinkToLoad = await ModalPage.closeLink;
        await newCloseLinkToLoad.waitForDisplayed({timeout:15000});
        await newCloseLinkToLoad.click();
       // await browser.pause(5000);
    })
})