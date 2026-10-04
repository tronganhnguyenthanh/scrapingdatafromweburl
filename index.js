import * as cheerio from "cheerio"
import {crawlURL} from "./url.js"
async function main(){
 const $ = await cheerio.fromURL(crawlURL, {
  requestOptions:{
   method:"GET",
   headers:{
    "user-agent":"my-scraper/1.0 (+https://example.com/bot)",
   } 
  }  
 })
 let banner_header = $(".common-img.image > picture > img").attr("src")
 let menu = [] 
 $("#topActionHeaderWrapper > #topActionHeader > .lzd-header-content > .lzd-links-bar a").each(function(i){
   menu[i] = $(this).attr("href")
 })
 let query = {
  header_logo:banner_header, 
  web_menu:menu.slice(1, 5),
 }
 console.log(query)
}
main()


