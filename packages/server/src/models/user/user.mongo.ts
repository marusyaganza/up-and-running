import { model, Schema } from "mongoose";
import { IUser } from "../../types/types";
import { Role } from "../../generated/graphql";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Role, required: true },
  },
  {
    toObject: {
      virtuals: true,
    },
  }
);

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export const User = model<IUser>("user", userSchema);
