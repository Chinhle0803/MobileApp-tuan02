"use strict";
function returnNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
returnNumber().then((res) => { console.log(res); });
