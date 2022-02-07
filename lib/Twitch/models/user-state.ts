export class TmiUserState {
    id: string;
    badgeInfo: string;
    badges: any[] = [];
    badgesRaw: string
    color: string;
    displayName: string;
    emoteOnly: boolean;
    emotes: any[] = [];
    emotesRaw: string[];
    firstMsg: boolean
    flags: any;
    messageType: string;
    mod: boolean;
    roomId: number;
    subscriber: boolean;
    tmiSentTs: number
    turbo: boolean;
    userId: boolean
    userType: string;
    username: string;

    /**
     * Extracts the userstate property from the userstate-raw property
     * Then builds the userstate object
     */
    static fromObject(obj: Object) {
        let tmiUserState = new TmiUserState();
        tmiUserState.id = obj["id"];
        tmiUserState.userId = obj["user-id"];
        tmiUserState.username = obj["username"];
        tmiUserState.badgeInfo = obj["badge-info"];
        tmiUserState.badges = obj["badges"];
        tmiUserState.badgesRaw = obj["badges-raw"];
        tmiUserState.color = obj["color"];
        tmiUserState.displayName = obj["display-name"];
        tmiUserState.emoteOnly = obj["emote-only"];
        tmiUserState.emotes = obj["emotes"];
        tmiUserState.emotesRaw = obj["emotes-raw"];
        tmiUserState.firstMsg = obj["first-msg"];
        tmiUserState.flags = obj["flags"];
        tmiUserState.messageType = obj["message-type"];
        tmiUserState.mod = obj["mod"];
        tmiUserState.roomId = obj["room-id"];
        tmiUserState.subscriber = obj["subscriber"];
        tmiUserState.tmiSentTs = obj["tmi-sent-ts"];
        tmiUserState.turbo = obj["turbo"];
        tmiUserState.userType = obj["user-type"];

        return tmiUserState;
    }
}
