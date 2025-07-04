class DomObj {

  constructor (el) {
    if (typeof el === 'string') el = document.getElementById(el);
    this.el = el;
  }

  appendTo (el) {
    if (typeof el === 'string') el = document.getElementById(el);
    el.appendChild(this.el);
    return this;
  }

  emit (evname, detail = null) {
    const ev = new CustomEvent(evname, {
      bubbles: true,
      cancelable: true,
      detail
    });
    ev.cropTarget = this;
    this.el.dispatchEvent(ev);
  }

  removeClass (cl) {
    this.el.classList.remove(cl);
    return this;
  }

  hasClass (cl) {
    return this.el.classList.contains(cl);
  }

  addClass (cl) {
    this.el.classList.add(cl);
    return this;
  }

  listen (evname,handler) {
    this.el.addEventListener(evname,e => handler(e.cropTarget,e));
    return this;
  }

}

export default DomObj;

