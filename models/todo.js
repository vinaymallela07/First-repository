var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
  task: {
		type: String,
		default: ""
	},
	done: {
		type: Boolean,
		default: false
	},
	completedOn: {
		type: Schema.Types.Date
	}
});


const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

