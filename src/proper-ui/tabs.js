import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('ul > .trigger');
        this.contents = container.querySelectorAll('.content');
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', event => {
                this.toggleTabs(event);
                this.toggleContents(event);
            });
        });
    }

    toggleTabs(event) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    toggleContents(event) {
        this.contents.forEach(content => {
            content.classList.remove('active');
        });
        this.container.querySelector(event.target.getAttribute('data-target')).classList.add('active');
    }
}

export {Tabs as default};