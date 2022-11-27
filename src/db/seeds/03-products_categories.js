/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const productsCategories = require("../fixtures/products_categories");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("products_categories").insert(productsCategories);
    });
};
