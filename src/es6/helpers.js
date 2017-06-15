export default function $$(selector, context = document) {
    /* Credit: Lea Verou <http://lea.verou.me/> */
    let elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

export function whichTransitionEndEvent() {
    let el = document.createElement('fake');
    let transitions = {
      'transition':       'transitionend',
      'OTransition':      'oTransitionEnd',
      'MozTransition':    'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for(let t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
