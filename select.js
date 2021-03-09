export default class Select {
   constructor(element) {
      this.element = element
      this.customElement = document.createElement('div')
      this.labelElement = document.createElement("span")
      this.optionsCustomElement = document.createElement("ul")
   }
}

function setupCustomElement(select) {
   
}