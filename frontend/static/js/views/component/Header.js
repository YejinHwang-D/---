export default function Header({
    $target,
}) {
    // Header area
    this.$element = document.createElement('header')
    this.$element.className = 'header'
    
    // Logo area
    this.$menuLogo = document.createElement('div')
    this.$menuLogo.className = 'menuLogo'
    // List area
    this.$menuList = document.createElement('div')
    this.$menuList.className = 'menuList'

    this.$element.appendChild(this.$menuLogo)
    this.$element.appendChild(this.$menuList)
    $target.appendChild(this.$element)

    this.render = () => {
        this.$menuLogo.innerHTML = `
            <a>한국여성의집</a>
        `
        this.$menuList.innerHTML = `
            <li><a>프로그램 안내</a></li>
            <li><a>사랑의 나눔터</a></li>
            <li><a>커뮤니티</a></li>
            <li><a>소소뜨라</a></li>
        `
    }
    this.render()
}