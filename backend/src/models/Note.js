import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content: {
        type: String,
        required: true
    },
},
{timestamps: true} //createdAt and updatedAt
);

const Note = mongoose.model("Notes", noteSchema);

export default Note;