class MobileNavbar{
    constructor(mobileMenu,navLinks,navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }

    addClickEvent(){
        this.mobileMenu.addClickEvent("click", () => console.log ("Hey"))
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    "mobile-menu",
    "nav-list",
    ".nav-list li",
);
MobileNavbar.init();