import { Button } from "./components/base/button"
import { InputField } from "./components/base/inputField"


export class List {

    static addList(listTitle) {
        this.addListButton.click()
        this.taskTitleInput.getInputField()
            .type(listTitle)
            .should('have.value',listTitle)
        this.confirmAddListButton.click()
    }

    static deleteAllLists() {
        cy.get(this.deleteListButton)
            .each($el => {
                $el.click()
            })
    }

    static getListSection(listTitle) {
        return cy.get(`[class="MuiCardContent-root"]>h3:contains("${listTitle}")`)
            .parent()
            .parent()
    }

    static deleteList(listTitle) {
        this.getListSection(listTitle).within(() => {
            this.deleteListButton.click()
        })
        this.confirmDeleteListButton.click()
    }

    static editList(listTitle) {
        this.getListSection(listTitle).within(() => {
            this.editListButton.click()
        })
    }

    static setNewListTitle(newTitle) {
        cy.get(editListTitleInput).getInputField()
            .clear()
            .type(newTitle)
            .should('have.value',newTitle)
    }

    static setNewListComment(newComment) {
        cy.get(editListCommentInput).getInputField()
            .clear()
            .type(newComment)
            .should('have.value',newComment)
    }
}

// input field selectors
List.emailInput = new InputField('label:contains("Email")~div>input')
List.taskTitleInput = new InputField('label:contains("Title")~div>input')
List.taskCommentInput = new InputField('label:contains("Comment")')
List.editListTitleInput = new InputField('[name="titleField"]')
List.editListCommentInput = new InputField('label:contains("Comment")~div>input')
List.listItemTitleInput = new InputField('label:contains("Items")~div>textarea')

// button selectors
List.addListButton = new Button('span:contains("Add List")')
List.confirmAddListButton = new Button('span:contains("Add Todo")')
List.deleteListButton = new Button('[title="Remove list"]')
List.confirmDeleteListButton = new Button('span:contains("Yes")')
List.cancelDeleteListButton = new Button('span:contains("Cancel")')
List.editListButton = new Button('span:contains("Edit List")')
List.addTaskItemsButton = new Button('[title="Add items"]')
List.confirmAddTaskItemButton = new Button('span:contains("Add todo items")')

// modals selectors
List.addListModal = '[class="add-list-form"]'
List.deleteListModal = '[class="modal-inner"]'