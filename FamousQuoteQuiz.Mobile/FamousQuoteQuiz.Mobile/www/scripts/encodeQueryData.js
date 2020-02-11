function encodeQueryData(data) {
    let ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    ret = ret.join("&");
    return "?" + ret;
}
// TODO: check for test