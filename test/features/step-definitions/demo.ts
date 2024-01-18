import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect as expectChai } from 'chai'
// import { expect as expectWDIO } from '@wdio/globals'

Given(/^Google page is opened$/, async ()=>{
    console.log('Before opening the url..........')
    await browser.url("https://www.google.com")
    await browser.pause(7000)
    console.log('After opening the URL[Symbol].........')
})

When(/^Search with (.*)$/, async (searchItem)=>{
    console.log(`>>> searchItem : ${searchItem}`);
    let ele = await $('[name=q]')
    await ele.setValue(searchItem)
    await browser.keys('Enter')
})

Then(/^Click on the first search result$/,async () => {
    let ele = await $(`<h3>`)
    await ele.click()
})

Then(/^URL should match (.*)$/,async (ExpectedURL) => {
    console.log(`>>> expectedUrl : ${ExpectedURL}`);
    let url = await browser.getUrl();
    console.log(`>>> actualUrl : ${url}`);
    expectChai(url).to.equal(ExpectedURL);
    // expectWDIO(url).toEqual(ExpectedURL);
})