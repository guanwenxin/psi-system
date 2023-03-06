import Eli18nen from 'element-ui/lib/locale/lang/en'
import Eli18nzh from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale/index'

import I18n from 'vue-i18n'
// vue静态挂载
import Vue from 'vue'
Vue.use(I18n)


const language = {
    // 语言
    zh: {
        msg: {
            hometitle:'欢迎使用企业进销存管理系统',
            login: '登录',
            name: '用户名',
            passwd: '密码',
            email: '邮箱',
            Invoicing:'进销存管理',
            analyse:'统计报表分析',
            information:'基础资料',
            system:'系统管理',
            other:'其它',
            welcome:'欢迎',
            weluser:'用户',
            welsentence:'登录企业进销存管理系统',
            Purchasemgt:'进货管理',
            Purchase:'进货入库',
            Return:'退货出库',
            IncomingDocuments:'进货单据查询',
            Returndocuments:'退货单据查询',
            CurrentStockInquiry:'当前库存查询',
        },
        ...Eli18nzh,
    },
    en: {
        msg: {
            hometitle:'Welcome to the PSIsystem',
            login: 'Login in',
            name: 'Username',
            passwd: 'Password',
            email: 'Email',
            Invoicing:'Invoicing',
            analyse:'analyse',
            information:'information',
            system:'system',
            other:'other',
            welcome:'welcome',
            weluser:'user',
            welsentence:'Log in to the enterprise PSIsystem',
            Purchasemgt:'Purchase management',
            Purchase:'Purchase',
            Return:'Return',
            IncomingDocuments:'Incoming documents',
            ReturnDocuments:'ReturnDocuments',
            CurrentStockInquiry:'Current stock inquiry',
            
        },
        ...Eli18nen,
    }
}

const i18n = new I18n({
    // locale: 'zh',
    locale: 'en',
    messages: language
})

// 按需引入
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n