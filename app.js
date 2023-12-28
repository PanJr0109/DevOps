const express = require('express');
const bodyparser=require('body-parser');

const app =express();


app.use(bodyparser.urlencoded({ extended: false }));


app.get('',(req,res)=>{   
    res.sendFile(__dirname+"/index.html");
});

// post calculation
app.post('',(req,res)=>{
    const num1=Number(req.body.X);
    const num2=Number(req.body.Y);

    if(req.body.calculation==="add"){
        const result=num1+num2;
        res.send(result.toString());
    }
    else if(req.body.calculation==="sub"){
        const result=num1-num2;
        res.send(""+result);
    }
    else if(req.body.calculation==="mul"){
        const result=num1*num2;
        res.send(""+result);
    }
    else if(req.body.calculation==="div"){
        const result=num1/num2;
        res.send(""+result);
    }
}
);

app.listen(8080, (res) => {
    console.log("Server is running");
});
