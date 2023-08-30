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

            for(let i = 0; i < todoList.length; i++){
                const todoObject = todoList[i];
                //const {name, dueDate} = todoObject;

                 const name = todoObject.name;
                 const dueDate = todoObject.dueDate;
                
                const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                        todoList.splice(${i}, 1);
                        renderTodoList();
                    " class="delete-todo-button">Delete</button>                                    
                `;
                todoListHTML += html
            }
            console.log(todoListHTML);

            document.querySelector('.js-todo-list')
                .innerHTML = todoListHTML;
        }
        renderTodoList();