const express = require('express')
const puppeteer = require('puppeteer')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  scrape(res)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function scrape(res) {
  let relatedTitles = [];
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/title/tt9764362/?ref_=hm_fanfav_tt_i_2_pd_fp1_wa', {
   timeout: 0
});
  for(i = 1; i < 6; i++){
   var element = await page.waitForSelector("#__next > main > div > section.ipc-page-background.ipc-page-background--base.sc-f9e7f53-0.ifXVtO > div > section > div > div.sc-f213d14f-1.ewpLoH.ipc-page-grid__item.ipc-page-grid__item--span-2 > section:nth-child(23) > div.ipc-shoveler.ipc-shoveler--base.ipc-shoveler--page0 > div.ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--nowrap.ipc-shoveler__grid > div:nth-child("+i+") > a")
   var text = await page.evaluate(element => element.textContent, element)
   relatedTitles.push(text);
   console.log(text)
  }

  var element2 = await page.waitForSelector("   #__next > main > div > section.ipc-page-background.ipc-page-background--base.sc-f9e7f53-0.ifXVtO > section > div:nth-child(4) > section > section > div.sc-5be2ae66-0.gESiMH > div.sc-5be2ae66-1.dRYQIl > h1")
   var titleName = await page.evaluate(element => element.textContent, element2)
  browser.close()
  res.render('index', { message:'Titles Related to ' +titleName ,values: relatedTitles })

}
