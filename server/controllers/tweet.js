import Tweet from "../models/Tweet.js";
import { handleError } from "../error.js";


export const createTweet = async (req, res, next) => {
    const newTweet = new Tweet(req.body);
    try {
        const savedTweet = await newTweet.save();
        res.status(200).json(savedTweet);
    } catch(err) {
        handleError(500, err);
    }
};