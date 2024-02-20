const bus = require('../models/buses')
const Ticket = require('../models/ticket')

module.exports.busList = async(req,res)=>{
   const {srcname,destname} = req.body;
   const buslist = await bus.find({srcname:srcname.toLowerCase(),destname:destname.toLowerCase()})
   if(buslist){
    res.json(buslist)
   }
}
module.exports.booking = async(req,res)=>{
   try {
      const user = req.user
      const {bus,seats,date} = req.body;
      const book = await Ticket.create({user:user.id,bus:bus._id,tickets:seats,date:date});
      if(book){
         res.json({success:true})
      }
      else {
         res.json({success:false,error:"Booking unsuccessful"})
      }
   } catch (error) {
      res.json({success:false,error:'Internal error'})
   }

} 