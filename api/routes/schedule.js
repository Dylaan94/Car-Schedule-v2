const express = require("express");

const scheduleRoutes = express.Router();

const dbo = require("../database/conn");

const ObjectId = require("mongodb").ObjectId;

// get list of all schedules
scheduleRoutes.route("/schedules").get((req, res) => {
  let db_connect = dbo.getDb("database");
  db_connect
    .collection("schedules")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// get single schedule by id

scheduleRoutes.route("/schedules/:id").get((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("schedules").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// create a new schedule

scheduleRoutes.route("/schedules/add").post((req, response) => {
  let db_connect = dbo.getDb();
    let myobj = {
        test: req.body.test
    // add parameters
  };
  db_connect.collection("schedules").insertOne(myobj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

// delete a schedule
scheduleRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("schedules").deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        console.log("1 schedule deleted")
        response.json(obj)
    })
})

module.exports = scheduleRoutes;