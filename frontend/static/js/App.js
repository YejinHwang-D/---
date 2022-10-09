import MainPage from './views/MainPage.js';
import OtherPage from './views/OtherPage.js';
import Program from './views/Program.js';

export default function App({ $target }) {
    this.routes = [
        { path: "/", view: async () => {
            new MainPage({$target})
        }},
        { path: "/other", view: async () => {
             new OtherPage({$target})
        }},
        { path: "/program", view: async () => {
            new Program({$target})
        }}
    ];

    this.router = async () => {
        $target.innerHTML = ''
        const potentialMatches = this.routes.map((route) => {
            return {
                route,
                isMatch: route.path === location.pathname,
            };
        });
    
        let match = potentialMatches.find(
            (potentialMatches) => potentialMatches.isMatch
        );
        match.route.view()
    }

    this.navigateTo = url => {
        history.pushState(null, null, url);
        this.router()
    }

    window.addEventListener("popstate", this.router());
    document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            this.navigateTo(e.target.href);
            this.router()
        }
    });
    this.router()
});
}
