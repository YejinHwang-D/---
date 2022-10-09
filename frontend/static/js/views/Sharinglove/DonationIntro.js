import Header from './component/Header.js'

export default function DonationIntro({
    $target,
}) {
    new Header({$target})
    this.$element = document.createElement('div')
    this.$element.className = 'MainText'
    $target.appendChild(this.$element)

    this.render = () => {
        this.$element.innerHTML = `
            <h1>후원 안내</h1>
            <p>otherpage</p>
            <a href="/" data-link>Go main page</a>
        `
    }
    this.render()
}