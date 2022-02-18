let liste = document.querySelector("#string");
let buton = document.querySelector("#btn");
let alan = document.querySelector("#converted_table");

buton.addEventListener("click", makeTable);

function makeTable() {
    const list = JSON.parse(liste.value);
    const new_list = [];
    document.querySelectorAll(".tobehidden").forEach((el)=>{
        el.style.display = "none"
    })



  for (let i = 0; i < list.length; i++) {
    let list_number = [list[i].split(" - ")[0]];
    let list_info = list[i].split(" - ")[1].split(", ");
    let list_name = list_info[0].split(" ");
    list_info = list_info.slice(1);
    for (const i of list_name) {
      list_number.push(i);
    }
    for (const i of list_info) {
      list_number.push(i);
    }
    new_list.push(list_number);
  }

  let bosliste = document.createElement("table");
  let columnNumber = new_list[0].length;
  let rowNumber = new_list.length;
  let baslik = ["St Nr", "First Name", "Last Name", "Location", "Path"];
  for (let j = 0; j <= rowNumber; j++) {
    let newtr = document.createElement("tr");

    if (j == 0) {
      for (let k = 0; k < columnNumber; k++) {
        let newth = document.createElement("th");
        let newText = document.createTextNode(baslik[k]);
        newth.appendChild(newText);
        newtr.appendChild(newth);
      }
    } else {
      for (let m = 0; m < columnNumber; m++) {
        let newtd = document.createElement("td");
        let newText = document.createTextNode(new_list[j - 1][m]);
        newtd.appendChild(newText);
        newtr.appendChild(newtd);
      }
    }
    bosliste.appendChild(newtr);
  }
  alan.appendChild(bosliste);

  console.log(bosliste);
  console.log(new_list);
}
