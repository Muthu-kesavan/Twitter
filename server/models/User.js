import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    email: 
    { type: String,
        required: true,
        unique: true 
    },
    password: 
    { type:
     String,
     required: true 
    },
    profileProfile: 
    { type: String 
    },
    followers: 
    { type: Array,
     defaultValue: [] 
    },
    following: 
    { type: Array,
     defaultValue: [] 
    },
    description: 
    { type: String 
    },
    profilePicture: 
    { type: String 
    },

    },
    { timestamps: true}
);

export default mongoose.model("User",UserSchema);