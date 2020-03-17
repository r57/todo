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
const deleteTaskButtonSelector = '[title="Remove list"]'
const confirmButtonSelector = 'span:contains("Yes")'
const cancelButtonSelector = 'span:contains("Cancel")'
const editTaskButtonSelector = 'span:contains("Edit List")'

const addListModal = '[class="add-list-form"]'
const deleteListModal = '[class="modal-inner"]'

var taskTitle = ''
var taskTitleSelector = `[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`

// TODO add beforeEach - login
// TODO add beter taskTitle creation handling
// TODO add after hook - delete all standing tasks


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
                cy.get(deleteListModal).within(() => {
                    cy.get(confirmButtonSelector)
                        .click({multiple:true})
                })
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

    it('User can edit a task', function () {
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

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain('single item')
        })
    })

})