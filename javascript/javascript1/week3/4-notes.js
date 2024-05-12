// Smart-ease - Back to the basics!
// NOnoN0nOYes (Note taking app)

// The saveNote function should push an object to the notes array with the keys content and id.

const notes = [];
/**
 *
 *
 * @param {string} content
 * @param {number} id
 */

function saveNote(content, id) {
  notes.push({
    content,
    id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

//unique feature of colored log
console.log("\x1b[31m%s\x1b[0m", "\n\t SaveNote task");
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      return "Sorry, we couldn't find a note with the provided id";
    }
  }
}

const firstNote = getNote(100);

console.log("\x1b[34m%s\x1b[0m", "\t Get a note task");
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
  //refactored without array
  for (let i = 0; i < notes.length; i++) {
    const { id, content } = notes[i];

    console.log(
      `The note with id: ${id}, has the following note text: ${content}`
    );
  }
}
console.log("\x1b[35m%s\x1b[0m", "\n\t Log out notes task");
logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
// Unique feature

//BONUS
// function that deletes a note decided by the argument id!

function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      delete notes[i];
    }
  }
}
console.log(notes);
deleteNote(1);
console.log(notes);
