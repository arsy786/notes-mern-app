const express = require("express");
const noteController = require("../controllers/note.controller");

const router = express.Router();

// NOTE ROUTES
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);
router.post("/", noteController.createNote);
router.put("/:id", noteController.updateNoteById);
router.delete("/:id", noteController.deleteNoteById);

module.exports = router;
