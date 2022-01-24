import {ChatMessage, ChatUser} from "./index.style";


let defaultColors = [
        '#FF0000', '#0000FF', '#008000', '#B22222', '#FF7F50',
        '#9ACD32', '#FF4500', '#2E8B57', '#DAA520', '#D2691E',
        '#5F9EA0', '#1E90FF', '#FF69B4', '#8A2BE2', '#00FF7F'
    ],
    randomColorsChosen = {};

function resolveColor(name, color) {
    if (color !== null) {
        return color;
    }

    if (name in randomColorsChosen) {
        color = randomColorsChosen[name];
    } else {
        color = defaultColors[Math.floor(Math.random() * defaultColors.length)];
        randomColorsChosen[name] = color;
    }
    return color;
}


export default function Message({message}) {
    const userstate = message.userstate;

    const msg = message.message;

    return (
        <>
            <ChatMessage>
                <ChatUser
                    color={resolveColor(userstate.username, userstate.color)}>{userstate['display-name']}</ChatUser> : {msg}
            </ChatMessage>
        </>
    )
}
