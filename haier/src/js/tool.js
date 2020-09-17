function convertStrToObject(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}