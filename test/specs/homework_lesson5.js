const { expect, browser, $ } = require('@wdio/globals')

describe('Lesson 5 homework', () => {
    it('Test 1', async () => {
        await browser.url('https://webdriver.io/')
        await browser.pause(2000)
        
        const docsNavbar = await $('//a[@class="navbar__item navbar__link" and @href="/docs/gettingstarted"]')
        await docsNavbar.click()

        const gettingStartedText = await $('header h1').getText()
        const searchField = await $('span.DocSearch-Button-Placeholder')
        const searchInputField = await $('input.DocSearch-Input')

        await searchField.click()
        await searchInputField.addValue(gettingStartedText)
        await browser.pause(2000)
        await expect(searchInputField).toHaveValue('Getting Started')
        
    })

    it.only('Test 2', async () => {
        await browser.url('https://www.demoblaze.com/index.html')
        await browser.pause(2000)

        const contactLink = await $('(//a[@class="nav-link"])[2]')
        await contactLink.click()

        const contactModalTitle = await $('#exampleModalLabel')
        await expect(contactModalTitle).toHaveText('New message')
        await browser.pause(2000)

        const contactEmail = await $('//input[@id="recipient-email"]')
        await contactEmail.addValue('example@gmail.com')
        await browser.pause(2000)

        const contactName = await $('input#recipient-name')
        await contactName.addValue('Lucas')
        await browser.pause(2000)

        const messageField = await $('textarea#message-text')
        const contactNameText = await contactName.getValue()
        await messageField.addValue(contactNameText)
        await browser.pause(2000)
        await expect(messageField).toHaveValue('Lucas')
        
    })


})

