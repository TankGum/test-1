import html from "../core.js";
import {connect} from "../store.js"

const connector = connect()

function App({games}) {
    
    return html`
        <ul>
            ${games.map(game => `<li>${game}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'LOL')">Add Game</button>
    `
}

export default connector(App)