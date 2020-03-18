const listsUrl = 'localhost:3000/list'

const validEmail = 'dude@gmail.com'

// input selectors
const emailInputSelector = 'label:contains("Email")~div>input'
const taskTitleInputSelector = 'label:contains("Title")~div>input'
const taskCommentInputSelector = 'label:contains("Comment")'
const editTaskTitleInputSelector = '[name="titleField"]'
const editTaskCommentInputSelector = 'label:contains("Comment")~div>input'

const mainContentSelector = '[class*="content-container"]'

// button selectors
const listsNavItem = '[href="/list"]'
const submitLoginButtonSelector = 'span:contains("Submit")'
const addListButtonSelector = 'span:contains("Add List")'
const confirmAddTaskButtonSelector = 'span:contains("Add Todo")'
const deleteTaskButtonSelector = '[title="Remove list"]'
const confirmButtonSelector = 'span:contains("Yes")'
const cancelButtonSelector = 'span:contains("Cancel")'
const editTaskButtonSelector = 'span:contains("Edit List")'
const addTaskItemsButton = '[title="Add items"]'

// modals selectors
const addListModal = '[class="add-list-form"]'
const deleteListModal = '[class="modal-inner"]'

// context variables and selectors
var taskTitle = ''
var taskTitleSelector = `[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`

// TODO add beter taskTitle creation handling


describe('Tasks Manipulation', function () {

    beforeEach('User is successfully logged in', function () {

        cy.visit('')

        cy.get(emailInputSelector)
            .clear()
            .type(validEmail)
            .should('have.value',validEmail)

        cy.get(submitLoginButtonSelector)
            .click()
    })


    after('Make sure all tasks are deleted', function () {
        cy.get(listsNavItem)
            .click()
        
        cy.get(deleteTaskButtonSelector)
            .each($el => {
                $el.click()
                })

        /* not ideal since it should be within modal that is produced when clicked on 'deleteTaskButtonSelector', 
        but CY clicks all delete buttons, layering confirm modals above themselves, and they are then not accessible */
        cy.get(confirmButtonSelector)
            .each($el => {
                $el.click()
            })
        
        cy.get(mainContentSelector)
            cy.get(mainContentSelector).should(($div) => {
                expect($div.get(0).innerText).to.contain('No Todo lists available.')
                expect($div.get(0).innerText).to.not.contain('Do It On: ')
            })
    })


    it('User can create a new task', function () {
        taskTitle = 'Do It On: ' + Date.now()

        cy.get(listsNavItem)
            .click()

        cy.get(addListButtonSelector)
            .click()       

        cy.get(taskTitleInputSelector)
            .type(taskTitle)
            .should('have.value',taskTitle)

        cy.get(confirmAddTaskButtonSelector)
            .click()

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(taskTitle)
        })
    })

    it('User can delete a list', function () {
        taskTitle = 'Do It On: ' + Date.now()

        cy.get(listsNavItem)
            .click()

        cy.get(addListButtonSelector)
            .click()      

        cy.get(taskTitleInputSelector)
            .type(taskTitle)
            .should('have.value',taskTitle)

        cy.get(confirmAddTaskButtonSelector)
            .click()

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(taskTitle)
        })

        cy.get(`[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`)
            .parent()
            .parent().within(() => {
                cy.get(deleteTaskButtonSelector)
                    .click()
        })

        cy.get(deleteListModal).within(() => {
            cy.get(confirmButtonSelector)
                .click()
        })

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.not.contain(taskTitle)
        })
    })

    it('User can edit a task title', function () {
        taskTitle = 'Do It On: ' + Date.now()

        cy.get(listsNavItem)
            .click()

        cy.get(addListButtonSelector)
            .click()       

        cy.get(taskTitleInputSelector)
            .type(taskTitle)
            .should('have.value',taskTitle)

        cy.get(confirmAddTaskButtonSelector)
            .click()

        cy.get(`[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`)
            .parent()
            .parent().within(() => {
                cy.get(editTaskButtonSelector)
                    .click()
            })

        const newTaskTitle = 'Edited Task Title On: ' + Date.now()
        cy.get(editTaskTitleInputSelector)
            .should('have.value',taskTitle)
            .clear()
            .type(newTaskTitle)
            .should('have.value',newTaskTitle)
        })

    it('User can edit a task comment', function () {
        taskTitle = 'Do It On: ' + Date.now()

        cy.get(listsNavItem)
            .click()

        cy.get(addListButtonSelector)
            .click()       

        cy.get(taskTitleInputSelector)
            .type(taskTitle)
            .should('have.value',taskTitle)

        cy.get(confirmAddTaskButtonSelector)
            .click()

        cy.get(`[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`)
            .parent()
            .parent().within(() => {
                cy.get(editTaskButtonSelector)
                    .click()
            })

        const timestamp = Date.now()
        const newTaskComment = 'Here is a new comment to this task, and it has been produced on ' + timestamp
        cy.get(editTaskCommentInputSelector)
            .should('have.value','')
            .clear()
            .type(newTaskComment)
        cy.get(editTaskCommentInputSelector)
            .should('include.value',timestamp)
        })

})