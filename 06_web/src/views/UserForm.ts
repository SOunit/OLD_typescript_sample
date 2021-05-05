export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log('hi there');
  }

  // old way to handle event before react, vue, anglar...
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
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

  render(): void {
    // create html element
    const templateElement = document.createElement('template');
    // convert string to html element
    templateElement.innerHTML = this.template();

    // add html element to dom
    this.parent.append(templateElement.content);
  }
}
