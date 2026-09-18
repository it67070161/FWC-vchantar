const newBtn = document.getElementById("newBtn");
const list = document.getElementById("ft_list");

loadTodos();

newBtn.addEventListener("click", function () {
    const todo = prompt("Enter a new TO DO:");

    if (todo !== null && todo.trim() !== "") {
        createTodo(todo.trim());
        saveTodos();
    }
});

function createTodo(text) {
    const div = document.createElement("div");

    div.className = "todo";
    div.textContent = text;

    list.insertBefore(div, list.firstChild);

    div.addEventListener("click", function () {
        const confirmDelete = confirm(
            "Do you want to remove this TO DO?"
        );

        if (confirmDelete) {
            div.remove();
            saveTodos();
        }
    });
}

function saveTodos() {
    const todos = [];

    const items = document.querySelectorAll(".todo");

    items.forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) +
        "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}