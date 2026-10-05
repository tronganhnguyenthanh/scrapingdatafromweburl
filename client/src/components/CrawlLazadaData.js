import {useState} from "react"
import {Button, Card} from "react-bootstrap"
import axios from "axios"
const CrawlLazadaData = () => {
  const [crawlData, setCrawlData] = useState([])
  const getMenuCrawler = async () => {
   let res = await axios.get("http://localhost:8080/api/menu-web")
   setCrawlData(res.data.web_menu)
  }
  return(
   <> 
    <Card className="header-crawl-data">
      <h2>Collect data from Lazada</h2>
      <Button onClick={getMenuCrawler} className="btn-collect-data">Collect data</Button>
    </Card>
    <ol className="text-secondary">
     {crawlData.length > 0 && crawlData.map((i, index) => {
       return(
        <li key={index}>
          <a href={i} className="text-decoration-none text-secondary">{i}</a>
        </li>
      )  
      })
     }
    </ol>
   </>
  )
}
export default CrawlLazadaData