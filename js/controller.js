"use strict";
/*******************************************************
 *     Back to the Future - 100p
 *
 *     Marty! Marty can you read me? This is Doc Brown,
 *     im messaging you from the Year of 1955!
 *
 *     The Flux Capacitor worked and I traveled back in time!
 *     I don't have time to explain all the details, but
 *     time itself is of the essence Marty! As proud as I am
 *     of my achievement, it seems like I can't come back to
 *     the future. At least not without your help!
 *
 *     Do you remember the Wrist-watch I gave you? You need
 *     to sync its hands to match the digital clock of the
 *     Delorean! Only when they are perfectly in sync, the
 *     Flux Capacitor can bring me back to 1985!
 *
 *     I think it's best to create a model first, which keeps
 *     track of the true time. Once we got that, we can sync
 *     the two clocks in separate views. Yours, analogue and
 *     animated, mine digital. Use this controller file to
 *     glue everything together!
 *
 *     Our clocks should be synced in no-time! Got it?
 *     No - Time! *laughs nervously*. Unfortunatley, I only
 *     have enough fuel for one ride. So we need to be 100%
 *     certain that it works. I'd suggest you add a button somewhere
 *     that saves the current time into the localStorage.
 *
 *     Now hurry Marty! Or I will be stuck in the past forever!
 *
 *     Doc Brown - 1955-11-05
 *     Noreya Friesacher - 2025-04-26
 *******************************************************/

// HINT:
// setInterval(functionName, 1000); will call functionName() every 1000 miliseconds.

import {Time} from "./model.time.js";
import {analogoue} from "./view.analagoue.js";
import {Digital} from "./view.digital.js";

let controller = {
    init() {
        //Prepare model and views
        Time.update();
        Digital.init();
        analogoue.init();

        //update every second
        this.loop();
        setInterval(() => this.loop(), 1000);

        //Button for saving
        let btn = document.getElementById("save");
        btn.addEventListener("click", () => {
            localStorage.setItem("savedTime", JSON.stringify({
                h: Time.hour,
                m: Time.minute,
                s: Time.second,
            }));
        });
    },

    loop() {
        Time.update();
        Digital.render(Time);
        analogoue.render(Time);
    }
};

controller.init();