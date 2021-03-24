module.exports = {
  title: '图书管理后台',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false, //右侧设置样式

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true, //导航标签

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false, //固定定位头部

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false, //菜单栏上面是否显示图标

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production' //错误日志
}
