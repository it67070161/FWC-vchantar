$(document).ready(function () {

    loadTodos();

    $("#newBtn").click(function () {

        const todo = prompt("Enter a new TO DO:");

        if (todo !== null && todo.trim() !== "") {
            createTodo(todo.trim());
            saveTodos();
        }
    });

    function createTodo(text) {

        const todo = $("<div></div>");

        todo.addClass("todo");
        todo.text(text);

        $("#ft_list").prepend(todo);

        todo.click(function () {

            const confirmDelete = confirm(
                "Do you want to remove this TO DO?"
            );

            if (confirmDelete) {
                todo.remove();
                saveTodos();
            }
        });
    }

    function saveTodos() {

        const todos = [];

        $("#ft_list .todo").each(function () {
            todos.push($(this).text());
        });

        document.cookie =
            "todos=" +
            encodeURIComponent(JSON.stringify(todos)) +
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

});