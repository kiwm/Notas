 var list = document.querySelector('ul#list')
 var txt = document.querySelector('input#txt')
 var button = document.querySelector('input#btn')
 button.onclick = addTodo;
 var todos = []

 function renderTodos() {
     list.innerHTML = ""
     for(todo of todos) {
         var todoElement = document.createElement('li')
         var text = document.createTextNode(todo)
         var link = document.createElement('a')

        link.setAttribute('href', '#')
        var pos = todos.indexOf(todo)
        link.setAttribute('onclick', 'deleteTodo('+ pos +')')
         var linkText = document.createTextNode('Excluir')
         link.appendChild(linkText)


         todoElement.appendChild(text)
         todoElement.appendChild(link)
         list.appendChild(todoElement)
     }
 }

 function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
 }

 function addTodo() {
       var text = txt.value
       todos.push(text)
       txt.value=''
    renderTodos()
 }



 