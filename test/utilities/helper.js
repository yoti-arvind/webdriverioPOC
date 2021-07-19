export const waitAndClick = (e1, timeout) => {
    e1.waitForDisplayed({ timeout });
    e1.click();
};