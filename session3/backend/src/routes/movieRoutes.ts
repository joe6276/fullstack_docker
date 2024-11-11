import { Router } from "express";
import { addMovies, getMovies } from "../controllers/movieController";

const router= Router()

router.post("", addMovies)
router.get("", getMovies)


export default router