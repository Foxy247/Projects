// Create Array to store  to-do items
        // create object in array to group todo text with due Date
        todoList = [{
            inputName: 'staubsaugen',
            inputDate: '14.08.2023'
        }]
        

        // take value from input and store it in TodoListArray
        function addTodo(){
            const inputName = document.querySelector('.js.input-name');
            const nameValue = inputName.value;
           
            const inputDate = document.querySelector('.js-due-date-input due-date-input');
            const dateValue = inputDate.value;

            todoList.push({
                nameValue,
                dateValue
            })
            console.log(todoList)
            
        }


        

            