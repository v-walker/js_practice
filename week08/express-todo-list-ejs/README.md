
# Todo List

Today's homework is to build a todo list.

In the end, your todo list should be able to read, write, update and delete a todo.


Here is a working example: https://dc-todo-list-redux.netlify.app/


The starting template has be created for you.

Remember to :

- clone this repo
- create a postgres database
- Install pg-promise and configure your database inside of node
- create your node routes the routes/index.js first and test them using thunder client
- add the logic to parse header information to your index.js file
- Once you''ve completed and tested your node routes, it's time to work on your gui (EJS file).
- You're going to have to add front-end logic for the button clicks inside of your public js file.
- Since your user will stay on the same page, the requests are going to made using fetch and not the form.


For the update functionality, you're going to need this additional code fragment


```html
<div id="editContainer" class="input-group">
        <div class="input-group-prepend ">
            <span class="input-group-text h-100">Todo</span>
          </div>

        <textarea name="task" 
        class="form-control" 
        aria-label="With textarea"
        placeholder="Edit a todo item..."></textarea>
          <div class="input-group-append">
            <button class="btn btn-outline-info h-100" type="submit" id="button-addon2">Edit</button>
          </div>
          <div class="input-group-append">
            <button class="btn btn-outline-danger h-100" type="button" id="button-addon2">Cancel</button>
        </div>
</div>
```
