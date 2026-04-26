"use strict";

export let Digital = {
    e: null,

    init() {
        this.e = document.getElementById("digital");
    },

    render(model) {//to always have two digits, we first turn it into a string and then add with padStart a zero in the beginning, if it would be just one digit
        const second = String(model.second).padStart(2, "0");
        const minute = String(model.minute).padStart(2, "0");
        const hour = String(model.hour).padStart(2, "0");

        this.e.textContent = hour + ":" + minute + ":" + second;
    }
}