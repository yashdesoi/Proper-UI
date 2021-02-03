import './styles/tooltip.css'

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }

    init() {
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        if (this.element.classList.contains('top')) {
            tip.style.top = `-${tip.offsetHeight}px`;
            tip.style.left = `${(this.element.offsetWidth - tip.offsetWidth) / 2}px`;
        } else if (this.element.classList.contains('left')) {
            tip.style.left = `-${tip.offsetWidth + 4}px`;
            tip.style.top = `${(this.element.offsetHeight - tip.offsetHeight) / 2}px`;
        } else if (this.element.classList.contains('right')) {
            tip.style.right = `-${tip.offsetWidth + 4}px`;
            tip.style.top = `${(this.element.offsetHeight - tip.offsetHeight) / 2}px`;
        } else if (this.element.classList.contains('bottom')) {
            tip.style.bottom = `-${tip.offsetHeight + 2}px`;
            tip.style.left = `${(this.element.offsetWidth - tip.offsetWidth) / 2}px`;
        }

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}

export {Tooltip as default};