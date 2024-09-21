"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const user_1 = __importDefault(require("./routes/user"));
const admin_1 = __importDefault(require("./routes/admin"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../public")));
app.use("/user", user_1.default);
app.use("/admin", admin_1.default);
app.use("/", index_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
