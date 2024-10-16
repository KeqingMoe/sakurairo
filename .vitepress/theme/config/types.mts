export namespace Iro {
    /**
     * 封面设置
     */
    export interface Cover {
        /**
         * 封面的签名，纯文本，html 不起作用
         */
        signature: string;
        /**
         * 网站拥有者的头像的 url，直接作为 img 元素的 src 属性值，会在主页展示
         */
        avatar: string;
        /**
         * 首页封面图片，固定图片或随机图片
         */
        background: {
            /**
             * 为 true 时使用随机图片
             */
            random?: boolean;
            /**
             * 桌面端图片 URL，直接填入 CSS url(...)中
             */
            desktop: string;
            /**
             * 移动端图片 URL，直接填入 CSS url(...)中
             */
            mobile: string;
        };
    };

    /**
     * 导航栏相关设置
     */
    export interface Nav {
        /**
         * 导航菜单图标的 url，直接作为 img 元素的 src 属性值
         */
        icon: string;
        /**
         * 导航栏显示的链接
         */
        links?: {
            /**
             * 链接的提示文本
             */
            title: string;
            /**
             * 链接的 url，直接作为 a 元素的 href 属性值
             */
            url: string;
        }[];
    };

    /**
     * 拼接出用于搜索的 url，例如 `https://example.com/search?s=keyword` ，请看各属性的注释。没有该属性则不会显示搜索框
     */
    export interface Search {
        /**
         * 搜索 url 的 pathname 部分，默认为 `search` 
         * 不要带前面的斜杠，除非搜索 url 的 pathname 是根目录
         */
        path?: string;
        /**
         * 搜索 url 的 param 部分，默认为 `s`
         */
        param?: string;
    };

    /**
     * 社交网络链接
     */
    export interface SocialLink {
        /**
         * 图标的名字，对于 WordPress 主题 Sakurairo 的图标包集中的图标包，可能的值可以是：
         * @enum `mail`: E-mail 图标
         * @enum `github`: GitHub 图标
         * @enum `tg`: Telegram 图标
         * @enum `zhihu`: 知乎图标
         * @enum `book`: 简书图标
         * @enum `st`: Steam 图标
         * @enum `lofter`: Lofter 图标
         * @enum `ncm`: 网易云音乐图标 
         * @enum `bilibili`: 哔哩哔哩图标 
         * @enum `lk`: 领英图标
         * @enum `tw`: 原 Twitter 图标
         * @enum `fb`: Facebook 图标
         * @enum `qq`: QQ 图标
         * @enum `qz`: QQ 空间图标
         * @enum `wechat`: 微信图标
         * @enum `youku`: 优酷图标 
         * @enum `weibo`: 微博图标
         * @enum `csdn`
         * @enum `custom`: 使用 `iconUrl` 提供的图标
         */
        icon: string;
        /**
         * 自定义图标的 url，直接作为 img 的 src 属性值
         */
        iconUrl?: string;
        /**
         * 社交网络链接的 url
         */
        link: string;
        /**
         * 提示文本
         */
        name: string;
    }

    /**
     * 社交网络链接的集合及对应图标包集/图标包
     */
    export interface Social {
        /**
         * 图标包集引用链接，不填默认为 WordPress 主题 Sakurairo 的图标包集 `https://s.nmxc.ltd/sakurairo_vision/@2.6/display_icon/`
         */
        iconUrl?: string;
        /**
         * 图标包，不填默认为 `sakura` 。可能的值可以是：
         * @enum `sakura`: 樱花配色
         * @enum `fluent_design`: 流畅设计
         * @enum `muh2`: 沐氢图标
         * @enum `flat_colorful`: 扁平多彩
         * @enum `macaronblue`: 马卡龙蓝
         * @enum `macarongreen`: 马卡龙绿
         * @enum `macaronpurple`: 马卡龙紫
         * @enum `pink`: 初始粉色
         * @enum `orange`: 阳光橙色
         * @enum `sangosyu`: 珊瑚朱色
         * @enum `sora`: 传统空色
         * @enum `nae:` 新生苗色
         */
        iconPkg?: string;
        /**
         * 一系列社交网络链接
         */
        links?: SocialLink[];
    };

    /**
     * 页脚相关配置
     */
    export interface Footer {
        /**
         * 页脚内容，可以填 html
         */
        content?: string;
        /**
         * 在设置了 iro-footer 插槽后，用来决定 content 是否放在插槽前面
         */
        beforeSlot?: boolean;
    };

    /**
     * 404 页面相关配置
     */
    export interface Error404 {
        /**
         * 404 页面标题，可以填 html
         */
        title?: string;
        /**
         * 404 页面文本，可以填 html
         */
        text?: string;
    };

    /**
     * 主题样式的 CSS 变量，属性值将直接作为 CSS 变量的值，请按 CSS 的写法来填写各个属性
     */
    export interface Style {
        /** 主题色 */
        themeSkin: string;
        /** 主题搭配色 */
        themeSkinMatching: string;
        /** 深色模式主题色 */
        themeSkinDark: string;
        /** 小组件面板按钮圆角 */
        menuRadius: string;
        /** 小组件面板组件圆角 */
        menuSelectionRadius: string;
    };

    /**
     * 文章信息
     */
    export interface Post {
        /**
         * 文章标题
         */
        title: string;
        /**
         * 文章链接
         */
        url: string;
        /**
         * 文章缩略图，可选，不填则默认为 PC 端的封面图
         */
        thumb?: string;
        /**
         * 文章发布日期
         */
        date: any;
        /**
         * 文章描述或摘要
         */
        description: string;
    };

    /**
     * VitePress 主题 Sakurairo 的配置类型
     */
    export interface Config {
        /**
         * 网站标题
         */
        title: string;
        /**
         * 网站标题后缀
         */
        titleTemplate?: string;
        /**
         * 网站描述
         */
        description: string;
        /**
         * 网页图标的 url，直接作为 img 元素的 src 属性值
         */
        favicon: string;
        /**
         * 封面设置
         */
        cover: Cover;
        /**
         * 导航栏相关设置
         */
        nav?: Nav;
        /**
         * 拼接出用于搜索的 url，例如 `https://example.com/search?s=keyword` ，请看各属性的注释。没有该属性则不会显示搜索框
         */
        search?: Search;
        /**
         * 社交网络链接
         */
        social?: Social;
        /**
         * 页脚相关配置
         */
        footer?: Footer;
        /**
         * 404 页面相关配置
         */
        error404?: Error404;
        /**
         * 主题样式的 CSS 变量，属性值将直接作为 CSS 变量的值，请按 CSS 的写法来填写各个属性
         */
        style?: Style;
        /**
         * 文章信息列表
         */
        posts?: Post[];
    };
}