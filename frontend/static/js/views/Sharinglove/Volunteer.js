import Header from '../component/Header.js'

export default function Volunteer({
    $target,
}) {
    new Header({$target})
    this.$element = document.createElement('div')
    this.$element.className = 'MainText'
    $target.appendChild(this.$element)

    this.render = () => {
        this.$element.innerHTML = `
            <h1>자원봉사 신청</h1>
            <p>otherpage</p>
            <a href="/" data-link>Go main page</a>
        `
    }
    this.render()
}