// 将四个模块统一暴露
import * as tradeMark from './product/tradeMark'
import * as attr from './product/attr'
import * as sku from './product/sku'
import * as spu from './product/spu'

export default {
    tradeMark,
    attr,
    sku,
    spu
}