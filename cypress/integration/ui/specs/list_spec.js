import { NavBar } from '../pages/components/navbar';
import { Page } from '../pages/page';
import { List } from '../pages/list-page';
import { Login } from '../pages/login-page';

const validEmail = 'dude@gmail.com'

// TODO add beter taskTitle creation handling

describe('Tasks Manipulation', function () {


    beforeEach('User is successfully logged in', function () {
        Page.goToUrl('')

        Login.setLoginEmail(validEmail)
        Login.submitLogin()
    })


    after('Make sure all tasks are deleted', function () {
        // refresh; should be handled better
        Page.goToUrl('localhost:3000/list')
        Login.submitLogin()
        
        List.deleteAllLists()
        
        //expect(Page.checkMainContentText('have.text', 'No Todo lists available.')) 
    })


    it('User can sort tasks by drag and drop', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const itemTitle1 = 'I have to do this tang no. 1'
        const itemTitle2 = 'I have to do this tang no. 2'
        const itemTitle3 = 'I have to do this tang no. 3'

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(`${itemTitle1}{enter}${itemTitle2}{enter}${itemTitle3}`)
        List.confirmAddListItem()

        List.dragItem(itemTitle2, 3)

        expect(List.getItemsTable().eq(3).should('have.value',itemTitle2))

        /*cy.get(itemTextSelector).eq(0)
            .should('have.value', 'Item A')
        cy.get(itemTextSelector).eq(1)
            .should('have.value', 'Item B')
        cy.get(itemTextSelector).eq(2)
            .should('have.value', 'Item C')

        cy.get(itemDragSelector).eq(2)
            .drag(itemDragSelector)

        cy.get(itemTextSelector).eq(0)
            .should('have.value', 'Item A')
        cy.get(itemTextSelector).eq(1)
            .should('have.value', 'Item C')
        cy.get(itemTextSelector).eq(2)
            .should('have.value', 'Item B')*/
    })

})