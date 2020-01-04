export default class Component {

  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

    this.children = {};
  }

  setState(data) {
    this.state = {
      ...this.state,
      ...data,
    };
    this.render();
  }

  on(eventName, elementName, callback) {
    this.element.addEventListener(eventName, (event) => {
      const delegateTarget =
        event.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) {
        return;
      }

      event.delegateTarget = delegateTarget;
      callback(event);
    });
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      delete this.children[constructor.name];
      return;
    }

    const current = this.children[constructor.name];

    if (!current || !_.isEqual(props, current.props)) {
      this.children[constructor.name] = new constructor(container, props);
    } else {
      container.replaceWith(current.element);
    }
  }
}