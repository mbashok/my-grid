const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/get-customer-list", (req, res) => {
  res.json({result:[
    {
        name: 'Mega',
        age: 30,
        gender: 'Female',
        mobile: "+91 8474948393",
        email: "mega@yopgmail.com",
        city: "Bangalore"
    },
    {
        name: 'George',
        age: 27,
        gender: 'Male',
        mobile: "+91 9988773344",
        email: "george@yopgmail.com",
        city: "Mumbai"
    },
    {
        name: 'Lisa',
        age: 22,
        gender: 'Female',
        mobile: "+91 7890134506",
        email: "lisa@yopgmail.com",
        city: "Chennai"
    },
    {
        name: 'Johnson',
        age: 36,
        gender: 'Male',
        mobile: "+91 7873456200",
        email: "johnson@yopgmail.com",
        city: "Bangalore"
    },
    {
        name: 'James',
        age: 30,
        gender: 'Male',
        mobile: "+91 8474948393",
        email: "james@yopgmail.com",
        city: "Hyderabad"
    }
  
  ]});
});



app.listen(3000, () => {
console.log("running on port 3000");
console.log("--------------------------");
});