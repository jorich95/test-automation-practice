const { expect, browser, $ } = require('@wdio/globals')

describe.skip('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await browser.pause(2000)

        const userNameField = await $('input[id="username"]')
        await userNameField.addValue('tomsmith')
        await browser.pause(2000)

        const passwordField = await $('input[id="password"]')
        await passwordField.addValue('SuperSecretPassword!')
        await browser.pause(2000)

        const submitButton = await $('button[type="submit"]')
        await submitButton.click()
        
        const flashMessage = await $('div[id="flash"]')
        await expect(flashMessage).toHaveText(
            expect.stringContaining('You logged into a secure area!123'))

    })

    it.only('should save text', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')

        const title = await $('//h2')
        const titleText = await title.getText()
        const usernameField = await $('input#username')

        await usernameField.addValue(titleText)
        await browser.pause(2000)
    
        const usernameFieldValue = await usernameField.getValue()
        const passwordField = await $('input#password')

        await passwordField.addValue(usernameFieldValue)
        await browser.pause(2000)
        await expect(passwordField).toHaveValue('Login Page')
        
    })
})

