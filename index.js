class Application {
    constructor(){
        document.addEventListener("DOMContentLoaded", (e) => this.onLoad(e), false);
    }

    onLoad(e){
        this.defaultField = document.querySelector("#pizza");
        this.onTabPressChecker(e);
    }

    onTabPressChecker(e){
        document.addEventListener("keydown", (e) =>{
            if(e.keyCode == 9 || e.which == 9){
                this.defaultField.checked = true;
            }
        });
    }
}