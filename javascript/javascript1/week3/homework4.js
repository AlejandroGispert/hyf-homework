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
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

//unique feature of colored log
console.log("\x1b[31m%s\x1b[0m", "\n\t SaveNote task \n");
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
  let result = "";
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return (result = notes[i]);
    }
  }
}

const firstNote = getNote(1);

console.log("\x1b[34m%s\x1b[0m", "\t Get a note task \n");
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
  answer = [];
  for (let i = 0; i < notes.length; i++) {
    answer.push(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
  return console.log(answer.join("\n"));
}
console.log("\x1b[35m%s\x1b[0m", "\n\t Log out notes task \n");
logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
// Unique feature

// Try an interactive version 💻 of your code here. Remember to insert your code in the top of the codepen :)
