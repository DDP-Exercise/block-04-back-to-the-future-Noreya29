"use strict";

export let Time = {
    second: 0,
    minute: 0,
    hour: 0,

    update() {
        const now = new Date();
        this.second = now.getSeconds();
        this.minute = now.getMinutes();
        this.hour = now.getHours();
    },

    getAngles() {
        return {
            second: this.second * 6,
            minute: this.minute * 6,
            hour: (this.hour % 12) * 30 + this.minute * 0.5, //because an analogue clock has 12 hours and 30 (360/12) stands for the degree, of the hour hand, in which it moves and the 0.5 (30/60) is for the continious movement, during the minute
        };
    }
};