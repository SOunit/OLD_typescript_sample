import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      // click:button -> click, button
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    // clear all html
    this.parent.innerHTML = '';

    // create html element
    const templateElement = document.createElement('template');
    // convert string to html element
    templateElement.innerHTML = this.template();
    // add events
    this.bindEvents(templateElement.content);

    // add html element to dom
    this.parent.append(templateElement.content);
  }
}
