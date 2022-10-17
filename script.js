// OOP - object oriented programming

class Human {
    constructor(obj) {
        this.name = obj.ism;
        this.leg = 2;
        this.hand = 2;
    }
}

// extends - meros , vorislik

class Man extends Human {
    constructor(obj) {
        super(obj);
        this.soch = 'kalta';
        this.muscle = 'strong';
    }
}

// console.log(new Human({
//     ism: null,
//     boyi: '150sm'
// }));
// console.log(new Man({
//     ism: 'Ali',
//     boyi: '177sm'
// }));

class Scroll {
    constructor(props) {
        let { element , top , unit } = props;
        this.el = document.querySelector(element);
        this.el.style.position = 'fixed';
        this.top = top;
        this.unit = unit;
        this.el.style.top = this.scroll();

        window.addEventListener('scroll' , () => this.scroll());
        window.addEventListener('resize' , () => this.scroll());
    }
    scroll() {
        this.elTop = this.scrollNumber();
        if (this.elTop - pageYOffset > 0) {
            this.el.style.top = this.elTop - pageYOffset + 'px';
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == 'px' || this.unit == undefined) {
            return this.top;
        } else if (this.unit == '%') {
            return  innerHeight * this.top / 100 - this.el.clientHeight;
        }
    }
}

const scroll = new Scroll ({
    element: '.header__nav',
    top: 100,
    unit: '%',
});


class Write {
    constructor({el , speed}) {
        this.el = document.querySelector(el);

        this.content = this.el.innerHTML;
        this.fullText = '';
        this.speed = speed;

        this.type();
    }
    type(i = 0) {
        this.fullText += this.content[i++];
        this.el.innerHTML = this.fullText;

        if(this.content != this.fullText) {
            setTimeout(() => this.type(i) , this.speed)
        }
    }
}

const write = new Write({
    el: 'h1',
    speed: 50,
});

// console.log(write);


class Roller {
    constructor(className) {
        this.el = document.querySelector(className);
        this.el.addEventListener('mouseover' , () => this.escape())
    }
    escape() {
        this.el.style.marginTop = this.randumNum(innerHeight - this.el.clientHeight) + 'px';
        this.el.style.marginLeft = this.randumNum(innerWidth - this.el.clientWidth) + 'px';
    }
    randumNum(innerNum) {
        return Math.trunc(Math.random() *innerNum);
    }
}

const roller = new Roller('.header__content');




class Menu {
    constructor({ menu, openBtn, closeBtn}) {
        this.menu = document.querySelector(menu);
        this.openBtn = document.querySelector(openBtn);
        this.closeBtn = document.querySelector(closeBtn);

        this.openBtn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
    }
    open() {
        this.menu.style.left = 0;
    }
    close() {
        this.menu.style.left = `-100%`;
    }
}

const menu = new Menu ({
    menu: '.header__menu',
    openBtn: 'button',
    closeBtn: '.header__menu-close' 
})