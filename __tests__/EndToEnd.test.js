/**
 * @jest-environment node
*/

/*End-toEnd testing for feature 2- a local host session must be running in otder for test to complete */

import puppeteer from "puppeteer" //this requires the puppeteer API (chronium) to imitate the browser for testing.

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async() => {
    //the chromium window will open 
    browser = await puppeteer.launch(
      //turning off Headless Mode- to watch the tests being conducted wihtin the browser
    //   {
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // }
    );
    //Puppeteer will navigate to your app via this link
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    //Puppeteer will check if '.event .details' isn't shown to the user 
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .details-button');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async() => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});

//add end to end test for feature 1 in another describe()