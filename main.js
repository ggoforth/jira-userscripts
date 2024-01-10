// ==UserScript==
// @name         Navigate Jira
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds ability to create your own hotkeys for navigating Jira.
// @author       You
// @match        ${BASE_URL}/*
// @grant        none
// ==/UserScript==

const BASE_URL = '${BASE_URL}';
const PROJECT_PREFIX = '${PROJECT_PREFIX}';
const SPAMMY = '${SPAMMY}' === 'true';

(function(base_url, project_prefix, spammy) {
    'use strict';
    /**
     * Keys that have been pressed.
     *
     * @type {*[]}
     */
    const pressed_keys = [];

    /**
     * Execution for hotkeys.
     *
     * @type {{xm: hotkey_execution.xm, xp: hotkey_execution.xp}}
     */
    const hotkey_execution= {
        'xp': () => {
            window.location = `${base_url}/jira/projects`;
        },
        'xm': () => {
            window.location = `${base_url}/browse/${project_prefix}`;
        },
        'xi': () => {
            window.location = `${base_url}/jira/software/c/projects/MSGR/issues/?filter=allissues&jql=project%20%3D%20"MSGR"%20and%20assignee%20%3D%20currentUser%28%29%20ORDER%20BY%20created%20DESC`;
        },
        'Enter': (event) => {
            // Create a new event for the "o" key
            const oEvent = new KeyboardEvent('keydown', {
                'key': 'o'
            });

            document.dispatchEvent(oEvent);
            event.preventDefault();
        }
    };
    const valid_commands = Object.keys(hotkey_execution);

    /**
     * Timeout for clearing keys.  Once a user presses a key, we wait 1 second before clearing the keys.
     *
     * @type {null}
     */
    let clearKeysTimeout = null;

    /**
     * Helper function to clear out the pressed keys.
     */
    const clearKeys = () => {
        pressed_keys.splice(0, pressed_keys.length);
    }

    /**
     * Keys that should be ignored.
     *
     * @type {string[]}
     */
    const ignored_keys = ['j', 'k', 'meta', '[', ']'];

    /**
     * Listen for keydown events. If the user presses a key, we add it to the pressed_keys array.  If the user presses
     * a valid hotkey, we execute the hotkey. If the user presses a key that is not a valid hotkey, we clear the keys.
     */
    document.body.addEventListener('keydown', (event) => {
        /**
         * If the user is typing in an input or textarea, we don't want to execute the hotkey.
         *
         * @type {Element}
         */
        if (spammy) console.log(`Keypress intercepted: ${event.key}`);
        const activeElement = document.activeElement;
        if ((activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable) || ignored_keys.includes(event.key)) {
            return;
        }

        pressed_keys.push(event.key);
        const composed_hotkey = pressed_keys.join('');

        if(valid_commands.includes(composed_hotkey)) {
            if (spammy) console.log(`Executing hotkey: ${composed_hotkey}`);
            hotkey_execution[composed_hotkey](event);
            clearKeys();
        }

        if (clearKeysTimeout) clearTimeout(clearKeysTimeout);
        clearKeysTimeout = setTimeout(clearKeys, 1000); // Clear keys after 1 second of no key press.
    });
})(BASE_URL, PROJECT_PREFIX, SPAMMY);
