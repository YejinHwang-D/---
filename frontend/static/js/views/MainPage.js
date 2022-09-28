import Header from './component/Header.js'
import MainMenu from './component/main/MainMenu.js'
import MissionVision from './component/main/MissionVision.js'

export default function MainPage({
    $target,
}) {
    this.render = () => {
        new Header({$target})
        new MainMenu({$target})
        new MissionVision({$target})
    }
    this.render()
}