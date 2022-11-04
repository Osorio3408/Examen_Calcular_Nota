let name = document.getElementById("nombre_estudiante");
let first_note = document.getElementById("first_note");
let second_note = document.getElementById("second_note");
let third_note = document.getElementById("third_note");

let input_one_empty = false;
let input_second_empty = false;

send.onclick = function (e) {
  e.preventDefault();
  
  let first_endnote = first_note.value - (first_note.value * 0.30);
  let second_endnote = second_note.value - (second_note.value * 0.30);
  let third_endnote = third_note.value - (third_note.value * 0.40);

  let result_notes = (first_endnote + second_endnote + third_endnote)/2;

  result.textContent = `${name.value} your final note is: ${result_notes.toFixed(2)}`;

  if(result_notes > 4.45){
    info.textContent = `You are excellent`
  }else if(result_notes >= 3.45){
    info.textContent = `You are good`
  }else if (result_notes > 1.95){
    info.textContent = `You lost matter but you can get it back`
  }else{
    info.textContent = `You lost the subject, you must repeat it`
  }
}

first_note.addEventListener("input", () => {

  if(first_note.value != " " ){
    input_one_empty = true;
    if(input_second_empty === true){
    }
  }

  if(first_note.value >5 || first_note.value < 1){
    alert("Only grades from 1 to 5 are allowed");
    send.disabled = true;
  }else{
    send.disabled = false;
  }
});

second_note.addEventListener("input", () => {

  if(second_note.value != " "){
    input_second_empty = true;
    if(input_one_empty === true){

    }
  }


  if(second_note.value >5 || second_note.value < 1){
    alert("Only grades from 1 to 5 are allowed");
    send.disabled = true;
  }else{
    send.disabled = false;
  }
});

third_note.addEventListener("input", () => {
  if(third_note.value >5 || third_note.value < 1){
    alert("Only grades from 1 to 5 are allowed");
    send.disabled = true;
  }else{
    send.disabled = false;
  }
});