import express from "express";
import path from "path";
import dotenv from "dotenv";
import IndexRouter from "./routes/index";
import UserRouter from "./routes/user";
import AdminRouter from "./routes/admin";
import { db } from "./database/drizzle/db";
import { UserTable } from "./database/drizzle/schema";
dotenv.config();
const port = process.env.PORT || 3000

const app = express();

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, "../public")))

app.use("/user", UserRouter)
app.use("/admin", AdminRouter)
app.use("/", IndexRouter)

app.get('/test', async (req, res) => {
     const user = await db.insert(UserTable).values({
          firstname: "John",
          lastname: "Doe",
          email: "josh@gmail.com",
          password: "password",
          profilePicture: "profile.jpg",
          email_verified: false,
          email_verification_token: "token",
          password_reset_token: "token",
          email_verified_at: new Date(),
     })
     res.json({ message: "User created", user })
})


app.listen(port, () => {
     console.log(`Server is running on port ${port}`)
})

