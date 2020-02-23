const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  watchAll
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#4F647F',
      '@text-color': 'rgba(255, 255, 255, 0.65)',
      '@heading-color': 'rgba(255, 255, 255, 0.95)', // 标题色
      '@layout-header-background': '#38485F', // 侧边导航栏背景色
      '@menu-dark-submenu-bg': '#3B4B62' // 侧边导航栏背景色
    }
  }),
  addWebpackAlias({
    '@': require('path').resolve(__dirname, 'src'),
    '@style': require('path').resolve(__dirname, 'src/style'),
    '@components': require('path').resolve(__dirname, 'src/components')
  })
)
