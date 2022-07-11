const db = require('../db');

class Order {
  static async listProducts() {
    const query = `
      SELECT * FROM products
    `;
    const result = await db.query(query);
    return result.rows;
  }
}

module.exports = Order;
