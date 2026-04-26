"use strict";

export let analogoue = {
    clock: null,
    second: null,
    minute: null,
    hour: null,

    init() {
        this.clock = document.getElementById("analogoue");

        this.clock.style.width = "300px";
        this.clock.style.height = "300px";
        this.clock.style.border = "5px solid black";
        this.clock.style.borderRadius = "50%";
        this.clock.style.position = "relative";

        // let strokes = [0, 90, 180, 270];
        // for (let angle of strokes) {
        //     const M = document.createElement("div");
        //     M.style.width = "6px";
        //     M.style.height = "25px";
        //     M.style.backgroundColor = "black";
        //     M.style.position = "absolute";
        //     M.style.transformOrigin = "center bottom";
        //     M.style.left = "50%";
        //     M.style.top = "50%";
        //     M.style.transform = "translate(-50%, -100%) rotate(" + angle + "deg)";
        //     this.clock.appendChild(M);
        // }

        this.hour = this.makeHand(80, "black");
        this.minute = this.makeHand(100, "black");
        this.second = this.makeHand(120, "red");
    },

    makeHand(length, color) {
        let h = document.createElement("div");
        h.style.width = "4px";
        h.style.height = length + "px";
        h.style.backgroundColor = color;
        h.style.position = "absolute";
        h.style.left = "50%";
        h.style.top = "50%";
        h.style.transform = "translate(-50%, -100%)";
        h.style.transformOrigin = "bottom";
        this.clock.appendChild(h);
        return h;
    },

    render(model) {
        const a = model.getAngles();
        this.second.style.transform = "translate(-50%, -100%) rotate(" + a.second + "deg)";
        this.minute.style.transform = "translate(-50%, -100%) rotate(" + a.minute + "deg)";
        this.hour.style.transform = "translate(-50%, -100%) rotate(" + a.hour + "deg)";
    }
}