import express from "express";

const router  = express.Router();

 router.get("/", (req, res) => {
    res.send("GET REQUEST SUCCESS");
});

 export default router; 