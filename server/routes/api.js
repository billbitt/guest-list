const express = require("express");
const bodyParser = require("body-parser");

const Venue = require("mongoose").model("Venue");
const Event = require("mongoose").model("Event");

const router = new express.Router();

/* 
api routes that require authentication go below
*/

// route to get venue information for this user
router.get("/venue/:userId", (req, res) => {
    console.log("received api/dashboard/id GET request for:", req.params.userId);
    Venue.findOne({owner: req.params.userId}, function(err, venueInfo){
        if (err) {
            res.send(err);
        } else {
            res.status(200).json({
                venue: venueInfo
            });
        };
    })
    
}); 

// event routes 
router.post("/event", (req, res) => {
    console.log("received api/event POST request:", req.body);
    // create a new artist record, via the Artist schema, from the request data
    const newEvent = new Event(req.body);
    // save the new artist record 
    newEvent.save((err, doc) => {
        // handle errors with the save.
        if (err) { 
            //check to see if it is a duplicate code
            if (err.code === 11000){
                res.json({message: "that Event is already in the database"})
            } else {
                res.json({message: err})
            };
        // if no errors.
        } else {
            res.status(200).json({
                message: doc
            });
        };
    });
    
}); 

router.get("/event/:venueId", (req, res) => {
    console.log("received api/event GET request:", req.params.venueId);
    // finding all events where the venue matches the venueId
    Event.find({
            venue: req.params.venueId
        }).
        limit(10).
        sort({ date: -1 }).
        populate('headliner').
        populate('supportOne').
        populate('supportTwo').
        populate('supportThree').
        exec((err, docs) => {
            // handle errors with the save.
            if (err) { 
                res.json({message: err})
            // if no errors.
            } else {
                res.status(200).json({
                    message: docs
                });
            };
        });    
}); 


module.exports = router;