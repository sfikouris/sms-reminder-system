import express, { Router, Request, Response } from 'express';
import { Vehicle, IVehicle } from '../models/Vehicle'; // Import the Vehicle model

const router: Router = express.Router();

router.post('/vehicles', async (req: Request, res: Response) => {
    try {
      const { registrationNumber, ownerName, mobileNumber, motExpirationDate } = req.body;
      const vehicle: IVehicle = new Vehicle({
        registrationNumber,
        ownerName,
        mobileNumber,
        motExpirationDate,
      });
      await vehicle.save();
      res.status(201).json(vehicle);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  router.get('/vehicles', async (req: Request, res: Response) => {
    try {
      const vehicles: IVehicle[] = await Vehicle.find();
      res.json(vehicles);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });
  
  export const vehicleRouter: Router = router;