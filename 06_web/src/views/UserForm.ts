export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log('hi there');
  }

  // old way to handle event before react, vue, anglar...
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log('h1 was hover over');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
      `;
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
