'use strict';
class EventManager {
    #component = null;
    constructor(events) {
        let { listeners = null, handler = null, component = null } = events;
        this.#component = component;
        if (handler) this.attachEvent({ func: handler });
        this.applyListeners(listeners);
    }
    applyListeners(listeners) {
        for (let event in listeners)
            this.attachEvent({
                type: event,
                func: listeners[event],
                elem: this.#component,
            });
    }
    attachEvent(eventConfig) {
        let { type = 'click', func = null, elem = null } = eventConfig;
        elem = elem || this.#component;
        this[`on${type}`] = func;
        elem && type && func ? elem.addEventListener(type, func) : '';
    }
    detachEvent(eventConfig) {
        let { type = 'click', func = null, elem = null } = eventConfig;
        elem = elem || this.#component;
        this[`on${type}`] = null;
        elem && type && func ? elem.removeEventListener(type, func) : '';
    }
    getListeners() {
        return this.#component.eventListenerList;
    }
    removeListeners() {
        this.#component.eventListenerList = {};
    }
}
export default EventManager;
