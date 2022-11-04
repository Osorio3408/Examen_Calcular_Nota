
let name = document.getElementById("nombre_estudiante");
let first_note = document.getElementById("first_note");
let second_note = document.getElementById("second_note");
let third_note = document.getElementById("third_note");



send.onclick = function (e) {
  e.preventDefault();
  
  let first_endnote = first_note.value - (first_note.value * 0.30);
  let second_endnote = second_note.value - (second_note.value * 0.30);
  let third_endnote = third_note.value - (third_note.value * 0.40);

  let result_notes = (first_endnote + second_endnote + third_endnote)/2;

  result.textContent = `${name.value} your final note is: ${result_notes}`;






























}