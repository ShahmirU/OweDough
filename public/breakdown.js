
var rp = require('request-promise');

export function get_user(first_name, last_name) {
    var options = {
        method: "GET",
        uri: "https://owedough-531a7.firebaseio.com/data.json?auth=bWDlfLBm3XMaakL4KRGcRXi70bUem1SnrbngZKIY",
        json: true,
    };
    rp(options)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}
