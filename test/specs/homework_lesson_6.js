const { expect, browser, $ } = require('@wdio/globals')

describe('Lesson 6 homework', () => {
    it('Test 1', async () => {
       await browser.url('https://webdriver.io/')
       const contributeLink = await $('//a[@href="/docs/contribute"]')
       await contributeLink.waitForClickable()
       await contributeLink.click()
       await browser.pause(2000)

       const workshopHeading = await $('h2[id="workshop"]')
       await workshopHeading.scrollIntoView()
       await expect(workshopHeading).toBeDisplayedInViewport()

    })

    it('Test 2', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        const usernameField = await $('input#username')
        const passwordField = await $('input#password')
        
        await usernameField.waitForEnabled()
        await usernameField.setValue('tomsmith')
        await browser.pause(2000)

        await passwordField.waitForEnabled()
        await passwordField.setValue('SuperSecretPassword!')
        await browser.pause(2000)

        const loginButton = await $('//button[@type="submit"]')
        await loginButton.waitForClickable()
        await loginButton.click()

        const secureAreaText = await $('//i[@class="icon-lock"]')
        expect(secureAreaText).toBeDisplayed()
        expect(secureAreaText).toHaveText(expect.stringContaining(' Secure Area'))

        const logoutButton = await $('//a[@href="/logout"]')
        await logoutButton.waitForClickable()
        await logoutButton.click()

        const loginPageText = await $('h2')
        expect(loginPageText).toBeDisplayed

    })

    it.only('Test 3', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading')
        const exampleTwoLink = await $('a[href="/dynamic_loading/2"]')
        await exampleTwoLink.waitForClickable()
        await exampleTwoLink.click()

        const startButton = await $('//button[text()="Start"]')
        await startButton.waitForClickable
        await startButton.click()

        const loadingBar = await $('div#loading')
        await loadingBar.waitForDisplayed({ reverse: true })
        const helloWorldText = await $('//h4[text()="Hello World!"]')
        await expect(helloWorldText).toBeDisplayed()
        await expect(helloWorldText).toHaveText(expect.stringContaining('Hello World!'))


    })


})