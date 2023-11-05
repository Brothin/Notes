const Note = require("../models/Notes");
/*
GET verify admin
*/
exports.admindashboard = async (req, res) => {
  let perPage = 12;
  let page = req.query.page || 1;

  const locals = {
    title: "Admin Dashboard",
    description: "Free NodeJS Notes App",
  };

  try {
    const notes = await Note.aggregate([
      { $sort: { updatedAt: -1 } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Note.count;

    res.render("admin/index", {
      userName: "Admin",
      locals,
      notes,
      layout: "../views/layouts/admin",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

/*
GET view specific note 
*/
exports.admindashboardViewNote = async (req, res) => {
  req.user = {
    id: "",
  };

  const note = await Note.findById({ _id: req.params.id }).lean();

  if (note) {
    res.render("admin/view-note", {
      noteID: req.params.id,
      note,
      layout: "../views/layouts/admin",
    });
  } else {
    res.send("Something went wrong.");
  }
};

/*
PUT update specific note 
*/
exports.admindashboardUpdateNote = async (req, res) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
    );
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

/*
DELETE delete specific note 
*/
exports.admindashboardDeleteNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

/*
GET add note 
*/
exports.admindashboardAddNote = async (req, res) => {
  res.render("admin/add", {
    layout: "../views/layouts/admin",
  });
};

/*
POST add note 
*/
exports.admindashboardAddNoteSubmit = async (req, res) => {
  req.user = {
    id: "6545ddda64e1b7acd96651f3",
  };
  try {
    let newNote = new Note({
      user: req.user.id,
      title: req.body.title,
      body: req.body.body,
      noteType: req.body.noteType,
    });
    await newNote.save();
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

/*
GET search notes
*/
exports.admindashboardSearch = async (req, res) => {
  try {
    res.render("admin/search", {
      searchResults: "",
      layout: "../views/layouts/admin",
    });
  } catch (error) {}
};

/*
POST search notes
*/
exports.admindashboardSearchSubmit = async (req, res) => {
  req.user = {
    id: "",
  };
  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const searchResults = await Note.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChars, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChars, "i") } },
      ],
    });

    res.render("admin/search", {
      searchResults,
      layout: "../views/layouts/admin",
    });
  } catch (error) {
    console.log(error);
  }
};
