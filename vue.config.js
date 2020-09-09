module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Ancient Calculator'
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fluffy-garbanzo/'
        : '/'
};