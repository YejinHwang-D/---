export default function MainMenu({
    $target,
}) {
    //top section
    this.$top = document.createElement('section')
    this.$top.className = 'top'

    this.$topdiv1 = document.createElement('div')
    this.$topdiv1.className = 'topDiv'
    this.$topdiv2 = document.createElement('div')
    this.$topdiv2.className = 'topDiv'

    this.$top.appendChild(this.$topdiv1)
    this.$top.appendChild(this.$topdiv2)

    //bottom section
    this.$bottom = document.createElement('section')
    this.$bottom.className = 'bottom'

    this.$bottomdiv1 = document.createElement('div')
    this.$bottomdiv1.className = 'bottomDiv'
    this.$bottomdiv2 = document.createElement('div')
    this.$bottomdiv2.className = 'bottomDiv'
    this.$bottomdiv3 = document.createElement('div')
    this.$bottomdiv3.className = 'bottomDiv'

    this.$bottom.appendChild(this.$bottomdiv1)
    this.$bottom.appendChild(this.$bottomdiv2)
    this.$bottom.appendChild(this.$bottomdiv3)


    //append html
    $target.appendChild(this.$top)
    $target.appendChild(this.$bottom)

    this.render = () => {
        this.$topdiv1.innerHTML = `
            <p>슬라이드 이미지</p>
        `
        this.$topdiv2.innerHTML = `
            <p>퀵메뉴</p>
        `

        this.$bottomdiv1.innerHTML = `
            <p>새글 소식</p>
        `
        this.$bottomdiv2.innerHTML = `
            <p>공지사항</p>
        `
        this.$bottomdiv3.innerHTML = `
            <p>후원 계좌</p>
        `
        
    }
    this.render()
}