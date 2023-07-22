// src/models/Vehicle.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IVehicle extends Document {
    registrationNumber: string;
    ownerName: string;
    mobileNumber: string;
    motExpirationDate: Date;
  }

  const vehicleSchema: Schema = new mongoose.Schema({
    registrationNumber: {
      type: String,
      required: true,
      unique: true, //is it unique? ask tamanas
    },
    ownerName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    motExpirationDate: {
      type: Date,
      required: true,
    },
  });
  
  export const Vehicle = mongoose.model<IVehicle>('Vehicle', vehicleSchema);