/****************/
/* dependencias */
/****************/
var express = require("express"); 
var morgan = require("morgan"); 
var path = require("path");

/**********************/
/* setting express up */
/**********************/
var app = express(); 
var PORT = 3000; 
app.use(morgan('dev')); 
app.use(express.static('public')); 
// can parse data
app.use(express.urlencoded({extended:true})); 
app.use(express.json());

/**************/
/* table data */
/**************/
var tables = [{
    customerName:"Saima", 
    customerEmail:"saima@example.com", 
    phoneNumber:"000-000-0000", 
    customerID:"saimaCool"
}]; 

/****************/
/* basic routes */
/****************/
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    //return res.json(tables);
  });

// hace un post a api tables del formulario
app.post("/api/tables", (req, res)=>{
    var newTable = req.body; 
    newTable.customerName = newTable.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newTable); 
    tables.push(newTable);
    res.json(newTable);  
}); 


// hace un post a tables
app.post("/tables", (req,res)=>{

}); 

//======================================//
//            starts server             //
//======================================//
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); 
}); 