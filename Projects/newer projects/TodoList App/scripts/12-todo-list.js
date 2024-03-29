// Create Array to store  to-do items
        // create object in array to group todo text with due Date
        const todoList = [{
            name:'buy groceries',
            dueDate:'15-07-2023'
            }, {
            name:'walk the dog',
            dueDate:'15-07-2023'
            }, {
            name:'build todo app',
            dueDate:'15-07-2023'
            }
            
        ];

        document.querySelector('.js-add-todo-button')
            .addEventListener('click', () => {
                addTodo();
            })

        // Function to add a new to-do item
            // take value from input - push it onto array
        // update addTodo Function
            // get dueDate out of date selector
        // go through the array
        // create HTML code for each todo
        // renders HTML on web page
        // put everything inside a function
        // add delete button
            // delete a value from array
        // update the List again

        function addTodo(){
            const todoInput = document.querySelector('.js-input');
            const name = todoInput.value;

            const dateInputElement = document.querySelector('.js-due-date-input')
            const dueDate = dateInputElement.value;
            
            todoList.push({                
                name,
                dueDate
            });
            console.log(todoList);

            todoInput.value = '';  
            renderTodoList();
        }

        // go through the array
        // create HTML code for each todo
        // renders HTML on web page
        // put everything inside a function
        // add delete button
            // delete a value from array
        // update the List again

        renderTodoList();

        function renderTodoList(){

            let todoListHTML = '';

            todoList.forEach((todoObject, index) => {
                
                const name = todoObject.name;
                const dueDate = todoObject.dueDate;
               
                const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button class="delete-todo-button js-delete-todo-button">Delete
                    </button>                                      
                `;
                todoListHTML += html
            });           

            document.querySelector('.js-todo-list')
                .innerHTML = todoListHTML;

            document.querySelectorAll('.js-delete-todo-button')
                .forEach((deleteButton, index) => {
                    deleteButton.addEventListener('click', () => {
                        todoList.splice(index, 1);
                        renderTodoList();
                    })
                })
        }
        renderTodoList();