const mongoose=require('mongoose');

exports.connectToDB=()=>{
    const connectionString=process.env.CONNECTION_STRING
const db=mongoose.connection
db.on('connected,',()=>{
    console.log(`DB connected with ${connectionString}`)
})

db.on('error',(error)=>{
    console.log('DB connection failed');
    console.log(error.message);
    //人为正常关闭process.exit(0);
    process.exit(1);//非正常关闭
})

db.on('disconnected',()=>{
    console.log('disconnected')
})

mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true});

}

