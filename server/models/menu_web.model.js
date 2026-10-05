import mongoose, {Schema} from "mongoose";
const menuSchema = new Schema({
 header_logo:{
  type:String  
 },
 web_menu:{
  type:[String]  
 }
},{
 collection:"menu_url"   
})
export default mongoose.model("menuSchema", menuSchema)