import express from "express"
import {getMenuWeb} from "../controllers/menu_web.controllers.js"
const router_api = express.Router()
router_api.get("/menu-web", getMenuWeb)
export default router_api