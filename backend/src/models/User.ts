import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
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

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10); // "Tuz" oluştur (10 zorluk seviyesi)
    this.password = await bcrypt.hash(this.password, salt); // Şifreyi hashle
    next();
  } catch (error: any) {
    next(error);
  }
});
// Artık bu modeli her yerde kullanabiliriz
export default mongoose.model<IUser>("User", UserSchema);
