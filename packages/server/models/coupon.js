import { Schema, model } from "mongoose";

const CouponSchema = new Schema(
  {
    code: {
      type: String,
      require: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    // Extra and not required.
    expirationDate: {
      type: Date,
      required: false,
    },
  },
  // SAME
  {
    timestamps: true,
    /* The `toJSON` option in the Mongoose schema is used to specify a transformation function that will
  be applied when converting a Mongoose document to a JSON object. In this case, the `transform`
  function is defined to remove certain properties from the JSON object before it is returned. */
    toJSON: {
      transform: function (doc, ret) {
        delete ret.expirationDate;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// This makes all coupon codes transfer to uppercase before it is saved in the database
CouponSchema.pre("save", function (next) {
  this.code = this.code.toUpperCase();
  next();
});

// Check to see if a coupon is valid

CouponSchema.methods.isValid = function () {
  const today = new Date();

  return this.expirationDate > today;
};

const Coupon = model("Coupon", CouponSchema);

export default Coupon;
