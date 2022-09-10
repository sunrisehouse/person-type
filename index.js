class AppearElement {
    constructor(ids) {
        this.elements = ids.map(id => document.getElementById(id));

        this.elements.forEach(ele => {
            ele.classList.add('appear-element')
            if (this.isActive(ele)) {
                print(1, ele)
                ele.classList.add('active');
            } else {
                print(2, ele)
                ele.classList.remove('active');
            }
        });

        window.addEventListener('scroll', this.onScroll);
    }

    isActive = (element) => {
        const currentScrollTopY = window.scrollY;
        const currentScrollBottomY = currentScrollTopY + window.innerHeight;

        const elementRect = element.getBoundingClientRect();
        const elementTopY = currentScrollTopY + elementRect.top;
        const elementBottomY = currentScrollTopY + elementRect.bottom;

        return !(currentScrollBottomY < elementTopY || currentScrollTopY > elementBottomY);
    }

    onScroll = () => {
        this.elements.forEach(ele => {
            if (this.isActive(ele)) {
                ele.classList.add('active');
            } else {
                ele.classList.remove('active');
            }
        });
    };
}

new AppearElement(['section-introduction', 'question-box-container']);
