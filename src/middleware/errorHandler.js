module.exports = (error, req, res, next) => {
    if(error.name==='validationError'){
        if(process.env.NODE_ENV==='production'){
// const {details}=error;
// const errNsg=details.map((i)=>({
//     message: i.message
// }))
return res.status(400).json(errNsg)
        }else{
            return res.status(400).json(error)
        }

    }
    return res.status(500).send('sth unexpected happened,please try again later')
};