import express from "express";
import { registerUser, loginUser, getUserData } from "../middleware/authMiddleware";

const router = express.Router();
