<template>
  <div>
    <!-- 按钮 -->
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    
    <!-- 表格
      data:表格组件将来需要展示的数据
      border: 给表格加边框
      column: 属性
      label: 显示标题
      width: 标题宽度
      align: 对其方式
    -->
    <el-table style="width: 100%"  :data="items" border >
      <el-table-column
        type="index"
        label="序号"
        width="80px"
        align="center">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="品牌名称"
        width=""
        align="center">
      </el-table-column>
      <el-table-column
        prop="id"
        label="品牌LOGO"
        width="">
      </el-table-column>
      <el-table-column
        prop="prop"
        label="操作"
        width="">
      </el-table-column>
    </el-table>

    <!-- 分页器 
      current-page:当前第几页
      total:数据总条数
      page-size:每一页展示的条数
      page-sizes:连续页码数
      layout: 分页器布局
      page-count: 按钮的数量超过20会折叠
    -->
    <el-pagination style="text-align:center"
      :current-page="page"
      :total="total"
      :page-size="3"
      :page-sizes="[3, 5, 10]"
      @current-change="getPageList"
      layout="prev, pager, next, jumper, ->, sizes , total"
    >
    </el-pagination>
    
  </div>
</template>

<script>
export default {
    name: 'tradeMark',
    data() {
      return {
        page: 1,
        limit: 3,
        total: '' || 1,
        items: []
      }
    },
    mounted() {
      this.getPageList()
    },
    methods: {
      async getPageList(pager = 1) {
        this.page = pager
        try {
          let result = await this.$API.tradeMark.reqTradeMarkList(this.page,this.limit)
          this.total = result.data.total
          this.items = result.data.items
        } catch (error) {
          alert(error.message)
        }
      },
    },
}
</script>

<style>

</style>