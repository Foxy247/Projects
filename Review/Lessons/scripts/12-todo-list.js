// Create Array to store  to-do items
        // create object in array to group todo text with due Date
        const todoList = [{
            name:'Harry Potter anhören',
            dueDate:'15-07-2023'
            }, {
            name:'Fantastische Tierwesen anschauen',
            dueDate:'15-07-2023'
            }, {
            name:'Fanni vögeln',
            dueDate:'15-07-2023'
            }
            
        ];

        // add a new todo 

        function addTodo() {
            const todoInput = document.querySelector('.js-input');
            const name = todoInput.value
            
            const dueDateInput = document.querySelector('.js-due-date-input')
            const dueDate = dueDateInput.value;

            todoList.push({
                name,
                dueDate
            })
            renderTodoList();
            todoInput.value = '';
            dueDateInput.value = '';
        }


        renderTodoList();

        // renderTodoList function
        function renderTodoList(){
            todoList.forEach((todoObject, index) => {
                const name = todoObject.name;
                const dueDate = todoObject.dueDate;

                const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                        todoList.splice(${index}, 1)
                        renderTodoList(); 
                    "></button>
                `;
                
            })
        }
        renderTodoList();