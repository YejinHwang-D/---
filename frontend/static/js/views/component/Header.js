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
            <a href="/" data-link>한국여성의집</a>
        `
        this.$menuList.innerHTML = `
            <li class="menucell"><a href="/program" data-link>프로그램 안내</a></li>
            <li class="menucell"><a href="/" data-link>사랑의 나눔터</a>
                <ul class="drop-down">
                    <li><a href="#">후원안내</a></li>
                    <li><a href="#">후원신청</a></li>
                    <li><a href="#">자원봉사안내</a></li>
                    <li><a href="#">자원봉사신청</a></li>
                </ul>
            </li>
            <li class="menucell"><a href="/" data-link>커뮤니티</a>
                <ul class="drop-down">
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">시설이미지</a></li>
                    <li><a href="#">자유게시판</a></li>
                    <li><a href="#">포토갤러리</a></li>
                </ul>
            </li>
            <li class="menucell"><a href="/" data-link>소소뜨라</a></li>
        `
    }
    this.render()
}