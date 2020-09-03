import Vue from 'vue'
import moment from 'moment'

Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
    }
});

Vue.filter("readMore", function(text, length, suffix) {
    let newText = text
        .map(a => a.text)
        .filter(b => b)
        .join(" ");
    return newText.substring(0, length) + suffix;
});

Vue.filter("truncate", function(value) {
    if (value.length > 20) {
        value = value.substring(0, 60) + " ...";
    }
    return value;
});