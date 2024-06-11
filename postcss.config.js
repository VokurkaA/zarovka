module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ],
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
};