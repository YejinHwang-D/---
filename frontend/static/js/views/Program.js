import Header from './component/Header.js'

export default function Program({
    $target,
}) {
    new Header({$target})
    this.$element = document.createElement('div')
    this.$element.className = 'MainText'
    $target.appendChild(this.$element)

    this.render = () => {
        this.$element.innerHTML = `
            <h1>프로그램 안내</h1>
            <p>otherpage</p>
            <a href="/" data-link>Go main page</a>
        `
    }
    this.render()
}