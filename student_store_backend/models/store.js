//import db
const db = require("../db")
class Store {
// add a single static async method to class called listProducts

static async listProducts(){
    const results = db.query(`
    SELECT prod.id,
    prod.name,
    prod.category,
    prod.image,
    prod.description,
    prod.price
    FROM products AS prod
    ORDER BY prod.id DESC`)
    return results.rows
}
}


module.exports = Store