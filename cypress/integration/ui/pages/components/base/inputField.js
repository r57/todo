import { Component } from '../component';

export class InputField extends Component {
    constructor(selector) {
        super(selector);
    }

    getInputField() {
        return cy.get(this.selector)
    }

    clear() {
        cy.get(this.selector).clear()
    }

    type() {
        cy.get(this.selector).type()
    }

}