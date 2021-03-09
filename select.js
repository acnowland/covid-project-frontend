export default class Select {
   constructor(element) {
      this.element = element
      this.customDiv = document.createElement('div')
      this.labelSpan = document.createElement("span")
      this.optionsCustomList = document.createElement("ul")
      setupCustomElement(this)
      element.after(this.customElement)
   }
}

function setupCustomElement(select) {
   select.customDiv.classList.add('custom-container')

   select.labelSpan.classList.add('custom-value-selected')
   select.customDiv.append(select.labelSpan)

   select.optionsCustomList.classList.add('custom-options')
   select.customDiv.append(select.optionsCustomList)
}