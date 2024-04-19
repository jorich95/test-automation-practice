const { expect, browser, $ } = require('@wdio/globals')

describe.skip('Homework Test 1', () => {
    it('Test 1', async () => {
        await browser.url('https://webdriver.io/')
        await browser.pause(2000)

        const apiLink = await $('a[class="navbar__item navbar__link"][href="/docs/api"]')
        await apiLink.click()
        await browser.pause(2000)

        const contributeTitle = await $('#contribute')
        await expect(contributeTitle).toHaveText('Contribute')
        await browser.pause(2000)

        const blogLink = await $('a[class="navbar__item navbar__link"][href="/blog"]')
        await blogLink.click()
        await browser.pause(2000)
        
        const blogPageTitle = await $('(//h2[@class="title_f1Hy"])[1]')
        await expect(blogPageTitle).toHaveText('Introducing DOM and Visual Snapshot Testing for Component, End-to-End and Mobile Testing')
        await browser.pause(2000)

        const blogParagraph1 = await $('//div[@class="markdown"]/child::p[1][contains(text(), "excited")]')
        await expect(blogParagraph1).toHaveText(expect.stringContaining("We're excited to announce support for DOM"))

    })


}) 