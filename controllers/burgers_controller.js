const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers/", function (req, res) {
    burger.create(
        req.body.burgerName,
        function (result) { res.redirect('/') }
    )
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        { devoured: req.body.devoured },
        condition,
        function (result) { res.redirect('/') }
    );
});


module.exports = router;