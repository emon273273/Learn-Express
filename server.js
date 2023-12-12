const express =require("express")
const handle=require("./handle")

const app=express();
// const admin=express();


const admin=express();

app.use("/admin",admin) 


app.get("/",(req,res)=>{

    res.send("helllo this is home page")
})

//sub app

admin.get("/dashboard",(req,res)=>{


    res.send("welcome to dashboard")
    
})



app.use("/admin",admin) 



//params

app.param('id',(req,res,next,id)=>{
const user={

    userId:id,
    userName:"bangladesh"
}

req.userDetails=user;
next();
})



app.get("/user/:id",(req,res)=>{
const a=(req.userDetails)
    res.send("hello user "+a.userId)
})

//common route hole tokhon  route use korbo

app.route("/about/mission")
.get((req,res)=>{

    res.send("welcome to application home get")
})
.post((req,res)=>{
    res.send("welcome to application home post")

})
.put((req,res)=>{

    res.send("welcome to applicatio put")
})

app.listen(4001,()=>{

    console.log("server is litening at 4001")
})