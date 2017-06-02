import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    moduleName: 'marionette.autoregion',
    plugins: [babel()],
    targets: [
        {dest: 'dist/index.umd.js', format: 'umd'},
        {dest: 'dist/index.esm.js', format: 'es'}
    ]
};
