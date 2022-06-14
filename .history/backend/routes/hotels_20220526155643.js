import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers.js/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE /:ID
router.put("/:id", verifyAdmin, updateHotel);

// DELETE /:ID
router.put("/:id", verifyAdmin, deleteHotel);

// GET /:ID
router.get("/:id", getHotel);

// GET ALL /
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
