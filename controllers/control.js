const getallproducts = async(req,res)=>{
    res.status(200).json({msg:"This is control and route"})
}
const getallproductstest = async(req,res)=>{
    res.status(200).json({msg:"This is control and route and testing"})
}

module.exports = {getallproducts, getallproductstest}