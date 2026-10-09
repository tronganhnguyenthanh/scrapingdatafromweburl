import {useState} from "react"
import {Button, Card} from "react-bootstrap"
import axios from "axios"
const CrawlLazadaData = () => {
  const [crawlData, setCrawlData] = useState([])
  const getMenuCrawler = async () => {
   let res = await axios.get("http://localhost:8080/api/menu-web")
   setCrawlData(res.data.web_menu)
  }
  const redirectMenuPage = (item) => {
   window.open(item, "_blank", "width:100%, height:400px") 
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
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="green" 
            className="bi bi-eye-fill m-1 custom-icon" 
            viewBox="0 0 16 16"
            onClick={() => redirectMenuPage(i)}
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
          </svg>
        </li>
      )  
      })
     }
    </ol>
   </>
  )
}
export default CrawlLazadaData