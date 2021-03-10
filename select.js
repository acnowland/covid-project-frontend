export default class Select {
   constructor(element) {
      this.element = element
      this.options = getFormattedOptions(element.querySelectorAll('option'))
      this.customDiv = document.createElement('div')
      this.virus = document.querySelector('.virus')
      this.labelSpan = document.createElement("span")
      this.optionsCustomList = document.createElement("ul")
      setupCustomElement(this)
      element.style.display = "none"
      element.after(this.customDiv)
   }

   get selectedOption() {
      return this.options.find(option => option.selected)
   }
}

function setupCustomElement(select) {
   select.customDiv.classList.add('custom-container')

   
   select.labelSpan.classList.add('custom-value-selected')
   select.labelSpan.innerText = select.selectedOption.label
   select.customDiv.append(select.labelSpan)

   // select.virus.classList.add('virus')
   // select.customDiv.append(select.virus)

   select.optionsCustomList.classList.add('custom-options')
   select.options.forEach(option => {
      const optionElement = document.createElement("li")
      optionElement.classList.add("custom-select_option")
      optionElement.classList.toggle("selected", option.selected)
      optionElement.innerText = option.label
      optionElement.dataset.value = option.value
      select.optionsCustomList.append(optionElement)
   })
   select.customDiv.append(select.optionsCustomList)

   select.customDiv.addEventListener('click', () => {
      select.optionsCustomList.classList.toggle("show")
   })
}








function getFormattedOptions(optionElements) {
   return [...optionElements].map(optionElement => {
      return {
         value: optionElement.value,
         label: optionElement.label,
         selected: optionElement.selected,
         element: optionElement
      }
   })
}

