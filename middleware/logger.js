import colors from "colors"

const logger = (req,res,next) => {
  let color = ""
  switch (req.method) {
    case "GET":
      color = "green"
      break;
    case "POST":
    color = "yellow"
    break;
    case "DELETE":
    color = "red"
    break;
    case "PUT":
    color = "orange"
    break;
      
      
     
  
    default:
      color = "green"
      break;
  }
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} `[color]);
  next()
 }

 export default logger