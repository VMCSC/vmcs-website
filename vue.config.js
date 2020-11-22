module.exports = {
    transpileDependencies: [
        /\bvue-awesome\b/
    ],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vincent Massey Computer Science Club'
                return args
            })
    }
}