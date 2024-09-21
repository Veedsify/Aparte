import express, { Request, Response } from "express";
const router = express.Router();
import path from "path";

router.get("/", (req: Request, res: Response) => {
     res.render("home_pages/index", {
          title: "Home"
     })
})



export default router;