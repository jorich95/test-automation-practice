const { expect, browser, $ } = require('@wdio/globals')

describe.skip('Homework Test 2', () => {
    it('Test 2', async () => {
        await browser.url('https://webdriver.io/')
        await browser.pause(2000)

        const searchField = await $('//span[@class="DocSearch-Button-Placeholder"]')
        await searchField.click()

        const searchInput = await $('//input[@class="DocSearch-Input"]')
        await searchInput.addValue('Search one')
        await expect(searchInput).toHaveValue('Search one')
        await searchInput.setValue('Search two')
        await expect(searchInput).toHaveValue('Search two')
        

    })

    
})