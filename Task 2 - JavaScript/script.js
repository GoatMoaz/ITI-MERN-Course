class task {
  constructor(title, description, date, priority, notes) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
  }
}

function displayTask(tasks) {
  const Ul = document.querySelector(".todo ul");
  const h2 = document.createElement("h2");
  const liTitle = document.createElement("li");
  const liDesription = document.createElement("li");
  const liDate = document.createElement("li");
  const liPriority = document.createElement("li");
  const liNotes = document.createElement("li");
  const ul = document.createElement("ul");
  const dialog = document.createElement("dialog");
  const div = document.createElement("div");
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("buttons");
  div.classList.add("close");
  div.innerHTML = "×";
  dialog.classList.add("itemDetail");
  h2.textContent = tasks.title;
  liDesription.innerHTML = `<b>Description:</b> ${tasks.description}`;
  liDate.innerHTML = `<b>Date:</b> ${tasks.date}`;
  liPriority.innerHTML = `<b>Priority:</b> ${tasks.priority}`;
  liNotes.innerHTML = `<b>Notes:</b> ${tasks.notes}`;

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.textContent = "Delete Task";
  btnDiv.appendChild(btnDelete);

  const btnUpdate = document.createElement("button");
  btnUpdate.classList.add("update");
  btnUpdate.textContent = "Update Task";
  btnDiv.appendChild(btnUpdate);

  ul.appendChild(liDesription);
  ul.appendChild(liDate);
  ul.appendChild(liPriority);
  ul.appendChild(liNotes);
  dialog.appendChild(div);
  dialog.appendChild(h2);
  dialog.appendChild(ul);
  dialog.appendChild(btnDiv);
  liTitle.innerHTML = `${tasks.title} <button class="details">Details</button>`;
  Ul.appendChild(liTitle);
  Ul.appendChild(dialog);
}
function projectController() {
  const newItem = document.querySelector("#newItem");
  newItem.addEventListener("click", () => {
    document.querySelector(".addDialog").showModal();
    const btnClose = document.querySelectorAll(".close");
    Array.from(btnClose).forEach((btn) => {
      btn.addEventListener("click", () => {
        resetInput();
        btn.parentElement.close();
      });
    });
    document.forms[1].addEventListener("submit", function (e) {
      e.preventDefault();
      loadFromInput();
      document.querySelector(".addDialog").close();
    });
  });

  const btnDetail = document.querySelectorAll(".details");
  Array.from(btnDetail).forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.parentElement.nextElementSibling;
      modal.showModal();
      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          e.target.parentElement.parentElement.close();
          e.target.parentElement.parentElement.previousElementSibling.remove();
          e.target.parentElement.parentElement.remove();
        } else if (e.target.classList.contains("close")) {
          e.target.parentElement.close();
        } else if (e.target.classList.contains("update")) {
          updateTask(modal);
        }
      });
    });
  });

  const searchBar = document.forms["search-todo"].querySelector("input");
  searchBar.addEventListener("keyup", function (e) {
    const ul = document.querySelector(".todo ul");
    const term = e.target.value.toLowerCase();
    const todos = ul.getElementsByTagName("li");
    Array.from(todos).forEach(function (todo) {
      const title = todo.firstChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    });

    Array.from(btnDetail).forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.parentElement.nextElementSibling;
        modal.showModal();
        modal.addEventListener("click", (e) => {
          if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.close();
            e.target.parentElement.parentElement.previousElementSibling.remove();
            e.target.parentElement.parentElement.remove();
          } else if (e.target.classList.contains("close")) {
            e.target.parentElement.close();
          } else if (e.target.classList.contains("update")) {
            updateTask(modal);
          }
        });
      });
    });
  });

  const btnUpdate = document.querySelectorAll(".update");
  Array.from(btnUpdate).forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.parentElement;
      updateTask(modal);
    });
  });
}
function loadFromInput() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;
  const high = document.querySelector("#high").checked;
  const medium = document.querySelector("#medium").checked;
  const notes = document.querySelector("#notes").value;
  let priority;
  if (title === "" || description === "" || date === "") {
    return;
  }
  if (high === true) {
    priority = "high";
  } else if (medium === true) {
    priority = "medium";
  } else {
    priority = "low";
  }
  const newTask = new task(title, description, date, priority, notes);
  displayTask(newTask);
  resetInput();
  const btnDetail = document.querySelectorAll(".details");
  Array.from(btnDetail).forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.parentElement.nextElementSibling;
      modal.showModal();
      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          e.target.parentElement.parentElement.close();
          if (e.target.parentElement.parentElement.previousElementSibling) {
            e.target.parentElement.parentElement.previousElementSibling.remove();
          }
          e.target.parentElement.parentElement.remove();
        } else if (e.target.classList.contains("close")) {
          e.target.parentElement.close();
        } else if (e.target.classList.contains("update")) {
          updateTask(modal);
        }
      });
    });
  });
}

function updateTask(modal) {
  const title = modal.querySelector("h2").textContent;
  const description = modal
    .querySelector("li:nth-child(1)")
    .textContent.split(": ")[1];
  const date = modal
    .querySelector("li:nth-child(2)")
    .textContent.split(": ")[1];
  const priority = modal
    .querySelector("li:nth-child(3)")
    .textContent.split(": ")[1];
  const notes = modal
    .querySelector("li:nth-child(4)")
    .textContent.split(": ")[1];

  // Populate the form with the current details of the task
  document.querySelector("#title").value = title;
  document.querySelector("#description").value = description;
  document.querySelector("#date").value = date;
  document.querySelector("#notes").value = notes;
  if (priority === "high") {
    document.querySelector("#high").checked = true;
  } else if (priority === "medium") {
    document.querySelector("#medium").checked = true;
  } else {
    document.querySelector("#low").checked = true;
  }

  // Show the form
  document.querySelector(".addDialog").showModal();

  // When the form is submitted, update the task and close the form
  document.forms[1].addEventListener("submit", function (e) {
    e.preventDefault();
    loadFromInput();
    document.querySelector(".addDialog").close();
    modal.close();
    if (modal.previousElementSibling) {
      modal.previousElementSibling.remove();
    }
    modal.remove();
  });
}

function resetInput() {
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#high").checked = true;
  document.querySelector("#medium").checked = false;
  document.querySelector("#notes").value = "";
}
projectController();
