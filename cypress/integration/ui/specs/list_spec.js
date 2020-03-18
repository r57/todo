import { NavBar } from '../pages/components/navbar';
import { List } from '../pages/list-page';
import { Page } from '../pages/page';
import { Login } from '../pages/login-page';

const validEmail = 'dude@gmail.com'
const mainContentSelector = '[class*="content-container"]'

// context variables and selectors
var taskTitle = ''
var taskTitleSelector = `[class="MuiCardContent-root"]>h3:contains("${taskTitle}")`
var itemTitle = ''
var itemSelector = `[class="todo-item-container"]>div>div>[value="${itemTitle}"]`

// TODO add beter taskTitle creation handling

describe('Tasks Manipulation', function () {

    beforeEach('User is successfully logged in', function () {
        Page.goToUrl('')
        Login.setLoginEmail(validEmail)
        Login.submitLogin()
    })


    after('Make sure all tasks are deleted', function () {
        NavBar.goTo('List')
        
        List.deleteAllLists()

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
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(listTitle)
        })
    })


    it('User can delete a list', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(listTitle)
        })

        List.deleteList(listTitle)
  
        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.not.contain(listTitle)
        })
    })


    it('User can edit a task title', function () {
        const listTitle = 'Do It On: ' + Date.now()
        const newListTitle = 'Edited Task Title On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)      

        List.editList(listTitle)
        List.setNewListTitle(newListTitle)

    })


    it('User can edit a task comment', function () {
        const taskTitle = 'Do It On: ' + Date.now()
        const timestamp = Date.now()
        const newTaskComment = 'Here is a new comment to this task, and it has been produced on ' + timestamp

        NavBar.goTo('List')

        List.addList(listTitle)
        
        List.editList(listTitle)
        List.setNewListComment(newTaskComment)

        cy.get(editTaskCommentInputSelector)
            .should('include.value',timestamp)

    })


    it('User can add items to task list', function () {
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

        cy.get(addTaskItemsButton)
            .click()

        const timestamp = Date.now()
        const newItem = 'I have to do this tang on ' + timestamp

        cy.get(listItemTitle)
            .type(newItem)
            .should('include.value',timestamp)
        
        cy.get(confirmAddTaskItemButton)
            .click()
        
        cy.get(itemSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(newItem)
        })
    })

})