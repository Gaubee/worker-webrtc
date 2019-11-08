
export function installShare(Comlink) {
    Comlink.transferHandlers.set("Event", {
        canHandle: (obj: unknown) => (obj instanceof Event && obj.constructor === Event),

        serialize: (event: Event) => {
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
        deserialize: (event: WorkerWebRTC.EventConfig) => {
            return new Event(event.type, {
                bubbles: event.bubbles,
                cancelable: event.cancelable,
                composed: event.composed,
            });
        }
    });
}