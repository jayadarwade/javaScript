const os = require("os");
const { readFileSync } = require("fs");

exports.getLocalMessage = () => {
    const language = "en";
    const data = readFileSync(__baseuri + "/locals/" + language + ".json")
    return JSON.parse(data)
}

exports.getLocalIp =async () => {
    const interfaces = os.networkInterfaces();
    for (let interfaceName in interfaces) {
        for (let iface of interfaces[interfaceName]) {
            if (iface.family == "IPv4" && !iface.internal)
                return `http://${iface.address}:${process.env.PORT}`
        }
    }
}
