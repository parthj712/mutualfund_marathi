export function getYouTubeID(url) {
    const regExp = /(?:v=|youtu\.be\/|embed\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}
