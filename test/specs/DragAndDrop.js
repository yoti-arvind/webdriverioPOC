const dragAndDropPage = require('../pageobjects/dragAndDrop.page');
const DragDropPage = require('../pageobjects/dragAndDrop.page');

describe('Drag and Drop cases', () => {
    it.only('drag component A and drop on B component', async () => {

    /*
        Only work in headless other wice its still still to cursor pointer: This is a issue in webdriverIO for more
        https://github.com/webdriverio/webdriverio/issues/4134
    */

        await DragDropPage.open();
        const elem = await DragDropPage.dragA;
        const target = await dragAndDropPage.dragB;
        // const location = parseInt(await target.getLocation('x', 'y'));
        // console.log("location===", location);
        const Xlocation = parseInt(await target.getLocation('x'));
        const Ylocation = parseInt(await target.getLocation('y'));
        console.log("Xlocation===", Xlocation);
        console.log('Ylocation===', Ylocation);
        //await elem.dragAndDrop(location);
        await elem.dragAndDrop({x: Xlocation, y: Ylocation });
        await browser.pause(10000);

    })
})