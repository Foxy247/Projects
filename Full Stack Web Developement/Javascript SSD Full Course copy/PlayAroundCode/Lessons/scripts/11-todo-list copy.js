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

        renderTodoList();

        function renderTodoList(){

            let todoListHTML = '';

            for(let i = 0; i < todoList.length; i++){
                const todoObject = todoList[i];
                const {name, dueDate} = todoObject;
                
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