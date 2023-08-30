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

        // Function to add a new to-do item
            // take value from input - push it onto array
        // update addTodo Function
            // get dueDate out of date selector
        function addTodo(){
            const todoInput = document.querySelector('.js-input');
            const name = todoInput.value;

            const dateInputElement = document.querySelector('.js-due-date-input')
            const dueDate = dateInputElement.value;
            
            todoList.push({
                // name: name,
                // dueDate: dueDate
                name,
                dueDate
            });

            todoInput.value = '';  
            renderTodoList();
        }


        // create a loop 
        // take value pair out of todoList array
        // take name and dueDate out and save it in variables
        // wrap todoName and dueDate in html code 
        // render the it on the page 
        // add a delete todo button 
            // take 1 value out of array 
            // render array
        renderTodoList();

        function renderTodoList(){

            let todoListHTML = ''

            for(let i = 0 ; i < todoList.length ; i++){
                const todoObject = todoList[i]

                const name = todoObject.name
                const dueDate = todoObject.dueDate

                const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                        todoList.splice(${i}, 1)
                        renderTodoList();
                    " class="delete-todo-button">Delete</button>

                `;
                todoListHTML += html
            }
            console.log(todoList)
            document.querySelector('.js-todo-list')
                .innerHTML = todoListHTML
        }

        
        renderTodoList();