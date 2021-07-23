const DropDownList = require('../pageobjects/dropDown.page');

describe('Drop Down test cases', () => {
    it('select first value from the drop down', async () => {
        await DropDownList.open();
        const selectDropDown = await DropDownList.selectOption;
        await selectDropDown.waitForDisplayed();
        //await browser.pause(10000);
        await selectDropDown.selectByVisibleText("Option 2");
        //await browser.pause(10000);



    })
})