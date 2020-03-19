import { NavBar } from './components/navbar';

export class Page {
    navBar = new NavBar();

    static goToPage(pageName) {
        this.navBar.goTo(pageName);
    }

    static goToUrl(url) {
        cy.visit(url);
    }

    static getMainContent() {
        return cy.get(this.mainContent)
    }
}

Page.mainContent = '[class*="content-container"]'