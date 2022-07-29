const axios = require('axios');
const fs = require('fs');

axios.get("https://res.cloudinary.com/des3si8bs/raw/upload/v1654770778/attendance/attandance_alc65n.JSON")
.then((response)=>{
    // console.log(response)
    fs.writeFileSync('./details.json' , JSON.parse(response) ,(err)=>{
        console.log(err)
    })
})

fs.readFile('./details.json','utf8', (err,data)=>{
    if(err) throw err
    for(let d of data){
    console.log(d.LeaveDays);
    console.log(d.LeaveDays>5);
    console.log(d.TotalWorkingDays*d.TotalProductiveTime);
    console.log(new Date(d.JoinDate)-new Date(d.LeaveDate));
    console.log(d.LeaveDays==0)
    }
})