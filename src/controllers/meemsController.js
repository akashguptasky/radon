let axios = require("axios")

let getMemes = async function(req,res)
{
    try{
    let options = {
        method:'get',
        url:'https://api.imgflip.com/get_memes'
    }
   let output =  await axios(options);
   res.status(200).send({data:output.data})
   }
   catch(err)
   {
    res.status(500).send({msg:err.message})
   }
}


let editMemes = async function(req,res)
{
  try{
        let id = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password;
        

        
    let options = {
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    
   let output = await axios(options);
   
//    res.status(200).send({data:{url:output.data.memes[0].url,page_url:output.data.memes[0].page_url}})
    res.status(200).send({data:output.data})
}
catch(err)
{
    res.status(500).send({msg:err.message})
}
   
  
}


// "data": {
//     "url": "https://i.imgflip.com/5mvxax.jpg",
//     "page_url": "https://imgflip.com/i/5mvxax"
// }


module.exports = {
    getMemes,editMemes
}