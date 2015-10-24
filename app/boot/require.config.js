﻿var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "OneOnOneAnim/scripts/libs/bootstrap/bootstrap",
        "crossroads": "OneOnOneAnim/scripts/libs/crossroads/crossroads",
        "jquery": "OneOnOneAnim/scripts/libs/jquery/jquery-1.9.0",
        "knockout": "OneOnOneAnim/scripts/libs/knockout/knockout-3.2.0beta.debug",
        "knockout-projections": "OneOnOneAnim/scripts/libs/knockout/knockout-projections.min",
        "signals": "OneOnOneAnim/scripts/libs/crossroads/signals",
        "hasher": "OneOnOneAnim/scripts/libs/crossroads/hasher",
        "text": "OneOnOneAnim/scripts/libs/require/text",
        "router": "OneOnOneAnim/app/boot/router"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}