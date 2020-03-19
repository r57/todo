import { Button } from "./components/base/button"
import { InputField } from "./components/base/inputField"


export class List {

    static addList() {
        this.addListButton.click()
    }

    static setListTitle(listTitle) {
        this.taskTitleInput.getInputField()
            .type(listTitle)
    }

    static confirmAddListModal() {
        this.confirmAddListButton.click()
    }

    static deleteAllLists() {
        this.deleteListButton.getButton()
            .each($el => {
                $el.click()
            })

        /* not ideal since it should be within modal that is produced when clicked on 'deleteTaskButtonSelector', 
        but CY clicks all delete buttons, layering confirm modals above themselves, and they are then not accessible */
        this.confirmDeleteListButton.getButton()
            .each($el => {
                $el.click()
            })
    }

    static getListSection(listTitle) {
        return cy.get(`[class="MuiCardContent-root"]>h3:contains("${listTitle}")`)
            .parent()
            .parent()
    }

    static deleteListModal(listTitle) {
        this.getListSection(listTitle).within(() => {
            this.deleteListButton.click()
        })
    }

    static confirmDeleteListModal() {
        this.confirmDeleteListButton.click()
    }

    static editList(listTitle) {
        this.getListSection(listTitle).within(() => {
            this.editListButton.click()
        })
    }

    static getListTitleInputField() {
        return this.editListTitleInput.getInputField()
    }

    static getListCommentInputField() {
        return this.editListCommentInput.getInputField()
    }

    static getListTitleInputFieldText() {
        // TODO does not work
        return this.editListTitleInput.getText()
    }

    static getListCommentInputFieldText() {
        // TODO does not work
        cy.get('label:contains("Comment")~div>input').then(($div) => {
            // access the native DOM element
            $div.get(0).innerText
        })
    }

    static setNewListTitle(newTitle) {
        this.getListTitleInputField()
            .clear()
            .type(newTitle)
    }

    static setNewListComment(newComment) {
        this.getListCommentInputField()
            .clear()
            .type(newComment)
    }

    static addListItem() {
        this.addTaskItemsButton.click()
    }

    static setListItemTitle(listItemTitle) {
        this.listItemTitleInput.getInputField()
        .type(listItemTitle)
    }

    static confirmAddListItem() {
        this.confirmAddTaskItemButton.click()
    }

    static getItemSection() {
        return cy.get(`[class="todo-item-container"]>div>div>[value="${itemTitle}"]`)
            .parent()
    }

    /*static getListItem(listItemTitle) {
        return cy.get()
    }*/
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
// List.addListModal = '[class="add-list-form"]'
// List.deleteListModal = '[class="modal-inner"]'