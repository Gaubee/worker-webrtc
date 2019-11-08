
export function installShare(Comlink) {
    Comlink.transferHandlers.set("Event", {
        canHandle: obj => (obj instanceof Event && obj.constructor === Event),
        /**
        * @param {Event} event
        */
        serialize: (event) => {
            return [{
                type: event.type,
                bubbles: event.bubbles,
                cancelable: event.cancelable,
                composed: event.composed,
            }, []];
        },
        /**
         * @param {Event} event
         */
        deserialize: (event) => {
            return new Event(event.type, {
                bubbles: event.bubbles,
                cancelable: event.cancelable,
                composed: event.composed,
            });
        }
    });
}