const express = require('express')
const eventcontroller = require('../controller/eventController')
const router = express.Router();


router.get('/events', (req, res) => {
    eventcontroller.getEvents(req, res);
})


router.get('/event/:eventId', (req, res) => {
    eventcontroller.getEvent(req, res);
})
router.post('/add/event', (req, res) => {
    eventcontroller.addEvent(req,res);
})
router.put('/edit/event/:eventId',(req,res)=>{
   eventcontroller.editEvent
})

module.exports = router;