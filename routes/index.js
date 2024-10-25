import express from "express";
import hotel from "./hotel.js";
import customer from "./customer.js";
import booking from './booking.js'
import table from './table.js'
import staff from './staff.js'
import staffMember from './staffMember.js'
import order from "./order.js"
import orderMenu from "./orderMenu.js"
import menuDetailes from "./menuDetailes.js"
import menu from "./menu.js"
import ingredientItems from "./ingredientItems.js";
import ingredients from "./ingredients.js"
import IngredientType from "./ingredientType.js"
const routes = express.Router();


routes.use("/", customer);
routes.use("/booking", booking);
routes.use("/table", table);
routes.use("/staffRole", staff);
routes.use("/staffMember", staffMember);
routes.use("/order", order);
routes.use("/orderMenu", orderMenu);
routes.use("/menuDetailes", menuDetailes)
routes.use("/menu", menu)
routes.use("/ingredientItems", ingredientItems)
routes.use("/ingredients", ingredients)
routes.use("/ingredientType", IngredientType)




export default routes