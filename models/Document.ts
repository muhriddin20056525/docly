import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IDocument extends Document {
  name: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    name: { type: String, required: true },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const DocumentModel = models.Document || model("Document", DocumentSchema);
export default DocumentModel;
