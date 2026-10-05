import * as cheerio from "cheerio"
import {crawlURL} from "../url.js"
import menu_webModel from "../models/menu_web.model.js"
const getMenuWeb = async (req, res) => {
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
   web_menu:menu.slice(1, 5)
  }
  let query_db = new menu_webModel({
   header_logo:query.header_logo,
   web_menu:query.web_menu 
  })
  let query_menu = await query_db.save()
  res.status(200).json(query_menu)
}
export {getMenuWeb}