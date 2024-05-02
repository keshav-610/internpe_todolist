var h3date = document.getElementById("date");
var d = new Date();
document.getElementById("date").innerHTML =
  "Date: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

const addbtn = document.getElementById("add-btn");

addbtn.addEventListener("click", (e) => {
  const input_value = document.getElementById("input-text").value;

  if (input_value.trim() === "") {
    alert("Please enter a value.");
  } else {
    const content_div = document.createElement("div"); //div
    content_div.classList.add("content-div");

    const content_input = document.createElement("input"); //input
    content_input.type = "text";
    content_input.classList.add("content-input");
    content_input.value = input_value;
    content_input.setAttribute("readonly", "readonly");

    const edit_btn = document.createElement("button");
    edit_btn.innerText = "Edit";
    edit_btn.classList.add("action-btn");

    const delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.classList.add("action-btn");

    content_div.appendChild(content_input);
    content_div.appendChild(edit_btn);
    content_div.appendChild(delete_btn);
    document.body.appendChild(content_div);

    edit_btn.addEventListener("click", (e) => {
      content_input.removeAttribute("readonly");
      content_input.focus();
    });

    delete_btn.addEventListener("click", (e) => {
      content_div.remove();
    });
  }
});
