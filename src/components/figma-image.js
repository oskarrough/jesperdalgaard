customElements.define('figma-image', class FigmaImage extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		console.log(42)
		// this.textContent = `Loading ${this.url}`
		this.model().then(model => {
			// console.log(model)
			const src = Object.values(model.images)[0]
			this.innerHTML = `<img src="${src}" alt="">`
		})
	}
	model() {
		const url = 'https://api.figma.com/v1/images/' + this.getAttribute('src')
		return fetch(url, {
			headers: {
		  	'X-FIGMA-TOKEN': '141542-baf47717-5d1c-42e6-b918-c3ab6f45bf0b'
			}
		}).then(res => res.json())
	}
})
