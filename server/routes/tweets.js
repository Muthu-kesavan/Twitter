import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createTweet, deleteTweet, likeOrDislike, getAllTweets } from "../controllers/tweet.js";

const router = express.Router();

router.post("/", verifyToken, createTweet);

router.delete("/:id", verifyToken, deleteTweet);

router.put("/:id/like", likeOrDislike);

router.get("/timeline/:id", getAllTweets);

router.get("/user/all/:id",)

export default router;

