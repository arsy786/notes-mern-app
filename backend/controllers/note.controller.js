const Note = require("../models/note.model.js");

/* [GET] View All Notes */
// Find the notes, Respond with them
const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find();
		res.json({ notes });
	} catch (error) {
		res.status(400);
		console.error("Could not get notes");
	}
};

/* [GET] View a specific Note by its ID */
// Get id from the url, Find the note using that id, Respond with the note
const getNoteById = async (req, res) => {
	const noteId = req.params.id;
	try {
		const doesNoteExist = await Note.exists({ _id: noteId });
		if (doesNoteExist) {
			const note = await Note.findById(noteId);
			res.json({ note });
		}
	} catch (error) {
		res.status(400).json({ message: "Could not get note by ID" });
	}
};

/* [POST] Create a Note */
// Get the sent in data from the request body, Create a note with it, Respond with the new note
const createNote = async (req, res) => {
	const { title, description } = req.body;
	try {
		const note = await Note.create({ title, description });
		res.status(201).send({ note });
	} catch (error) {
		res.status(400).json({ message: "Could not add note" });
	}
};

/* [PUT] Update a specific Note by its ID */
// Get the id from the url, Get the data from the request body, Find and update the record, Respond with updated record
const updateNoteById = async (req, res) => {
	const noteId = req.params.id;
	const { title, description } = req.body;
	try {
		const doesNoteExist = await Note.exists({ _id: noteId });
		if (doesNoteExist) {
			await Note.findByIdAndUpdate(noteId, {
				title,
				description,
			});
			const note = await Note.findById(noteId);
			res.json({ note });
		}
	} catch (error) {
		res.status(400).json({ message: "Could not update note" });
	}
};

/* [DELETE] Remove a specific Note by its ID */
// Get id from url, Delete the record, Respond
const deleteNoteById = async (req, res) => {
	const noteId = req.params.id;
	try {
		const doesNoteExist = await Note.exists({ _id: noteId });
		if (doesNoteExist) {
			await Note.findByIdAndDelete({ _id: noteId });
			res.json({ success: "Record deleted" });
		}
	} catch (error) {
		res.status(500).json({ message: "Could not delete note!" });
	}
};

const noteController = {
	getAllNotes,
	getNoteById,
	createNote,
	updateNoteById,
	deleteNoteById,
};

module.exports = noteController;
