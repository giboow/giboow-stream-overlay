module.exports = {
    reactStrictMode: true,
    env: {
        TMI_USERNAME: process.env.TMI_USERNAME,
        TMI_TOKEN: process.env.TMI_TOKEN,
        TMI_CHANNEL: process.env.TMI_CHANNEL,
        TMI_IS_SERVERTEST: process.env.TMI_IS_SERVERTEST,
    }
}
