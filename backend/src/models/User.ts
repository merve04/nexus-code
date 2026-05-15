import mongoose, { Schema, Document } from "mongoose";

// Kullanıcı verisinin "tipini" (User Interface) tanımlıyoruz
// MERN uzmanı olmak için bu tanımları yapmak şart!
export interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Artık bu modeli her yerde kullanabiliriz
export default mongoose.model<IUser>("User", UserSchema);
