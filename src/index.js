import Tooltip from './proper-ui/tooltip';
import Dropdown from './proper-ui/dropdown';
import Tabs from './proper-ui/tabs';
import Snackbar from './proper-ui/snackbar';

document.querySelectorAll('.tooltip').forEach(element => {
    (new Tooltip(element)).init();
});

document.querySelectorAll('.dropdown').forEach(element => {
    (new Dropdown(element)).init();
});

document.querySelectorAll('.tabs').forEach(element => {
    (new Tabs(element)).init();
});

const snackbar = new Snackbar();
snackbar.init();

document.querySelector('.snackbar-trigger').addEventListener('click', () => {
    snackbar.show("Hi! I'm Snackbar :P");
});