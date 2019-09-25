 var list = document.querySelector('ul#list')
 var txt = document.querySelector('input#txt')
 var button = document.querySelector('input#btn')

 var todos = []

 function renderTodos() {
     list.innerHTML = ""
     for(todo of todos) {
         var todoElement = document.createElement('li')
         var text = document.createTextNode(todo)

         todoElement.appendChild(text)
         list.appendChild(todoElement)
     }
 }


 function addTodo() {
       var text = txt.value
       todos.push(text)
       txt.value=''
    renderTodos()
 }
 button.onclick = addTodo;


 