const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("from get");
});
app.post("/",(req,res) => {
    res.send("from post")
    
})
app.patch("/",(req,res) => {
    res.send("got a patch request")
    
}
)
app.delete("/",(req,res) => {
    res.send("from delete")
    
})
app.listen(8080, () => {
  console.log("come from server😃 😁 😁 😁 😁 😁 😁 😁 😁 😁 😁");
});
