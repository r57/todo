import { NavBar } from '../pages/components/navbar';
import { List } from '../pages/list-page';
import { Page } from '../pages/page';
import { Login } from '../pages/login-page';

const validEmail = 'dude@gmail.com'
const mainContentSelector = '[class*="content-container"]'

// TODO add beter taskTitle creation handling

describe('Tasks Manipulation', function () {

    beforeEach('User is successfully logged in', function () {
        Page.goToUrl('')
        Login.setLoginEmail(validEmail)
        Login.submitLogin()
    })


    after('Make sure all tasks are deleted', function () {
        // refresh; should be handled better
        Page.goToUrl('')
        Login.setLoginEmail(validEmail)
        Login.submitLogin()

        NavBar.goTo('List')
        
        List.deleteAllLists()
        
        /*cy.get(mainContentSelector)
            cy.get(mainContentSelector).should(($div) => {
                expect($div.get(0).innerText).to.contain('No Todo lists available.')
                expect($div.get(0).innerText).to.not.contain('Do It On: ')
            })*/
    })


    it('User can create a new task', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)

        expect(List.getListSection(listTitle).should('exist'))
    })


    it('User can delete a list', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(listTitle)
        })

        List.deleteList(listTitle)
  
        expect(List.getListSection(listTitle).should('not.exist'))
    })


    it('User can edit a task title', function () {
        const listTitle = 'Do It On: ' + Date.now()
        const newListTitle = 'Edited Task Title On: ' + Date.now()

        NavBar.goTo('List')

        List.addList(listTitle)      

        List.editList(listTitle)

        List.setNewListTitle(newListTitle)

        assert(List.getListTitleInputFieldText().should('have.text', newListTitle))
    })


    it('User can edit a task comment', function () {
        const listTitle = 'Do It On: ' + Date.now()
        const timestamp = Date.now()
        const newTaskComment = 'Here is a new comment to this task, and it has been produced on ' + timestamp

        NavBar.goTo('List')

        List.addList(listTitle)
        
        List.editList(listTitle)
        List.setNewListComment(newTaskComment)

        assert(List.getListCommentInputFieldText().should('have.text', newTaskComment))
    })


    it('User can add items to task list', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const newItemTitle = 'I have to do this tang on ' + timestamp

        NavBar.goTo('List')

        List.addList(listTitle)    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(newItemTitle)
        List.confirmAddListItem()

        /*cy.get(itemSelector).should(($div) => {
            expect($div.get(0).innerText).to.contain(newItem)
        })*/
    })

})