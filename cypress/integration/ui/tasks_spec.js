const loginUrl = 'localhost:3000'
const listsUrl = 'localhost:3000/list'

const validEmail = 'dude@gmail.com'

const emailInputSelector = 'label:contains("Email")~div>input'
const taskTitleInputSelector = 'label:contains("Title")~div>input'
const taskCommentInputSelector = 'label:contains("Comment")'

const mainContentSelector = '[class*="content-container"]'

const listsNavItem = '[href="/list"]'
const submitLoginButtonSelector = 'span:contains("Submit")'
const addListButtonSelector = 'span:contains("Add List")'
const confirmAddTaskButtonSelector = 'span:contains("Add Todo")'

const addListModal = '[class="add-list-form"]'

var timestamp = Date.now()

var taskTitle = 'Do It On: '


describe('Create a new list', function () {

    it('Go to login page', function () {
        cy.visit(loginUrl)
        cy.url()
            .should('include',loginUrl)
    })

    it('Input a valid email: #validEmail', function () {
        cy.get(emailInputSelector)
            .clear()
            .type(validEmail)
            .should('have.value',validEmail)
    })

    it('Submit the login info', function () {
        cy.get(submitLoginButtonSelector)
            .click()
    })

    it('Go to Lists page', function () {
        cy.get(listsNavItem)
            .click()
    })

    it('Start Add List modal', function () {
        cy.get(addListButtonSelector)
            .click()
    })

    it('Insert a task name', function () {
        taskTitle = taskTitle + timestamp

        cy.get(taskTitleInputSelector)
            .type(taskTitle)
            .should('have.value',taskTitle)
    })

    it('Confirm task create modal', function () {
        cy.get(confirmAddTaskButtonSelector)
            .click()
    })

    it('The task should be successfully created', function () {
        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(taskTitle)
        })
    })

})