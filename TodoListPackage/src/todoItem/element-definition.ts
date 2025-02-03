//import defaultHtml from "./interface.html";


class TodoItem2 extends HTMLElement { // Changed class name to avoid conflicts
  private _root: ShadowRoot;

  // Reflect properties to attributes
  get name() { return this.getAttribute('name') || ''; }
  set name(val: string) { this.setAttribute('name', val || ''); }

  get description() { return this.getAttribute('description') || ''; }
  set description(val: string) { this.setAttribute('description', val || ''); }


  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });

    // Use the template from assets
    this.loadTemplate();
  }

  private async loadTemplate() {
    try {
      const templateElement = document.createElement('template');

      // const customHtml = (document?.getElementById(
      //   "element-details-template"
      // ) as any).content;//?.innerHTML; // antes era .content

      // if (!customHtml)
      //   templateElement.innerHTML = customHtml;
      // else if (!defaultHtml)
      //   templateElement.innerHTML = defaultHtml;
      // else
      // {
        const response = await fetch('/assets/todolist-package/todoItem/interface.html');
        const html = await response.text();
        
        templateElement.innerHTML = html;
      //}
     
      // Get the content of the template tag
      const templateContent = templateElement.content.querySelector('template')?.content;
      
      if (templateContent) {
        this._root.appendChild(templateContent.cloneNode(true));
      }
    } catch (error) {
      console.error('Failed to load template:', error);
    }


    // No longer needed, handled by properties/attributes:
    // this._name = this.getAttribute('name');
    // this._description = this.getAttribute('description');
  }

  // Observe attribute changes
  static get observedAttributes() {
    return ["name", "description"];
  }


  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue === newValue) 
      return;  // No change

    // Update the shadow DOM here.  Since you haven't provided the template structure,
    // I'll provide a general example.  Adapt as needed based on your interface.html:
    if (name === 'name' || name == 'description')
      this.render();
  }


  private render() {
      // Example rendering based on assumed template structure. Update with your actual elements
      const nameElement = this._root.querySelector('.name') as HTMLElement;
      const descriptionElement = this._root.querySelector('.description') as HTMLElement;

      if (nameElement)
        nameElement.textContent = this.name || ''; // Or appropriate way to set content

      if (descriptionElement)
        descriptionElement.textContent = this.description || ''; // Similar update for description
  }

  // connectedCallback and disconnectedCallback are typically not necessary for simple components.
  // If you need specific setup/teardown logic, include them.
}

window.customElements.define("element-details", TodoItem2);

//export default TodoItem2;