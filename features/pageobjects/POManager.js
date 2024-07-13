const { LaunchUrl } = require("./LaunchUrl");

class POManager {

    constructor(page) {
        this.page = page;
        this.launchurl = new LaunchUrl(this.page);
    }

    getLaunchPage() {
        return this.launchurl;
    }

}

module.exports = { POManager };