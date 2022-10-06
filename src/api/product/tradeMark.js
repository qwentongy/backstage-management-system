// 获取品牌管理的数据接口 /admin/acl/role/{page}/{limit}
import request from '@/utils/request'

export const reqTradeMarkList = (page,limit) => request({url: `/admin/acl/role/${page}/${limit}`})