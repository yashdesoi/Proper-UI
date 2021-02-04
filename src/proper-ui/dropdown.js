import './styles/dropdown.css';

class Dropdown {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
        // Storing the value of the height height before setting it to 0;
        this.trueContentHeight = this.content.offsetHeight;
        this.content.style.height = 0;
        this.clicks = 0;
    }

    init() {
        this.trigger.addEventListener('click', () => {
            this.clicks += 1;
            this.trigger.classList.toggle('active');
            if (this.clicks%2 === 1) {
                this.content.style.height = `${this.trueContentHeight}px`;
            } else {
                this.content.style.height = '0px';
            }
        });
    }
}

export {Dropdown as default}