const Note = require("../models/Notes");
const mongoose = require("mongoose");

/*
GET homepage
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "Notes",
    description: "A place to store your notes.",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

/*
GET about
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About Notes",
    description: "A place to store your notes.",
  };

  res.render("about", locals);
};

/*
GET admin
*/
exports.admin = async (req, res) => {
  const locals = {
    title: "Admin",
    description: "A place to store your notes.",
  };

  res.render("../views/admin/adminLogin", locals);
};
