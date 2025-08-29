"use strict";
function testErr() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
testErr().catch((res) => { console.log(res); });
