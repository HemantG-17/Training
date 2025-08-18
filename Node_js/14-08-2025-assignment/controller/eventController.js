const Event = require('../models/Event');
async function getEvents(req, res) {
    try {
        let events = await Event.find({})
        console.log(events)
        res.json(events)

    } catch (err) {
        console.log(err)
    }
}

async function addEvent(req, res) {
    try {
          console.log(req.body,'req.body' )
          let event=new Event(req.body)
          await event.save();
          res.end(".......BOOK HAS BEEN ADDED......")
    } catch (err) {
        console.log(err);
    }
}
async function getEvent(req, res) {
    try {
        let eventId=req.params.eventId
        let event = await Event.findOne({eventId:eventId})
        if(event){
        console.log(event)
        res.json(event)
        }else{
            console.log("NO EVENT FOUND...........")
        }

    } catch (err) {
        console.log(err)
    }
}

async function editEvent(req,res){
   let eventId=req.params.eventId
   let event=await event.findone({eventId:eventId})
   if(event){
        console.log(req.body)
        Event.eventName=req.body.eventName;
        Event.noOfDays=req.body.noOfDays;
        await Event.save();
   }
}
module.exports={
    addEvent,
    getEvents,
    getEvent,
    editEvent
}