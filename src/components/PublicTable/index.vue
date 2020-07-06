<template>
  <div class="public-table">
    <a-row :gutter="15">
      <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <slot></slot>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="showTree ? 18 : 24"
        :xl="showTree ? 18 : 24"
      >
        <slot name="top-bar"></slot>
        <a-table
          v-bind="$attrs"
          v-on="$listeners"
          :columns="tableColumns"
          :data-source="dataSource"
          :scroll="{ x: 900 }"
          :pagination="false"
        >
          <template
            v-for="item in customRenderList"
            :slot="item.dataIndex"
            slot-scope="text, record"
          >
            <slot :name="item.dataIndex" :row="record"></slot>
          </template>
          <!-- Operate -->
          <div style="display:flex;" slot="action" slot-scope="text, record">
            <div class="table-operate" v-for="item in operate" :key="item.name">
              <a
                href="javascript:;"
                v-if="!item.dropdown"
                @click="item.fun && item.fun(record, $event)"
                >{{ item.name }}</a
              >
              <a-dropdown v-else placement="bottomCenter">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  {{ item.name }} <a-icon type="down" />
                </a>
                <a-menu
                  @click="item.fun && item.fun(record, $event)"
                  slot="overlay"
                >
                  <a-menu-item
                    v-for="item1 in item.dropdownList"
                    :key="item1.key"
                  >
                    <a href="javascript:;">{{ item1.name }}</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </a-table>
        <div class="pagination-wrap" v-if="showPagination">
          <a-pagination
            class="pagination"
            showSizeChanger
            :total="tableInfo.total"
            :showTotal="total => `共 ${tableInfo.total} 条记录`"
            :current="tableInfo.pageIndex"
            :pageSize="tableInfo.pageSize"
            @change="tableInfo.changePageIndex"
            @showSizeChange="tableInfo.changePageSize"
            :pageSizeOptions="tableInfo.pageSizeOptions"
          >
            <template slot="buildOptionText" slot-scope="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "PublicTable",
  props: {
    // 是否展示树组件
    showTree: {
      type: Boolean,
      default: false
    },
    // 表格列的配置描述
    columns: {
      type: Array,
      required: true
    },
    // 数据数组
    dataSource: {
      type: Array,
      required: true
    },
    // 操作按钮
    operate: {
      type: Array,
      default: () => {
        return [];
      },
      required: true
    },
    // 显示Pagination
    showPagination: {
      required: false,
      default: true
    },
    tableInfo: {
      required: true
    }
  },
  mounted() {
    this.getCustomRenderList();
  },
  data() {
    return {
      customRenderList: [],
      tableColumns: []
    };
  },
  methods: {
    getCustomRenderList() {
      this.tableColumns = this.columns.map(item => {
        if (item.custom) {
          this.customRenderList.push(item);
          return {
            ...item,
            scopedSlots: { customRender: item.dataIndex }
          };
        }
        return item;
      });
      if (this.operate.length > 0) {
        this.tableColumns.push({
          title: "操作",
          dataIndex: "action",
          width: 200,
          scopedSlots: { customRender: "action" }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.public-table {
  .table-operate {
    margin-right: 20px;
  }
  .pagination-wrap {
    padding: 24px;
    padding-top: 10px;
    display: flex;
    /deep/ .pagination {
      margin-left: auto;
      color: #b3b3b3;
      .ant-pagination-item-link {
        border-radius: 4px;
        border: none;
        color: #b3b3b3;
      }
      .ant-pagination-item {
        border-radius: 4px;
      }
      .ant-select-selection {
        border-radius: 13px;
      }
      .ant-pagination-disabled {
        border: none;
      }
    }
  }
}
</style>
