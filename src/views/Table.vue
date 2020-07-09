<template>
  <div class="table">
    <public-header>缺勤记录</public-header>
    <public-table
      :columns="columns"
      :data-source="data"
      :operate="operate"
      :tableInfo="tableInfo"
    >
      <!-- Top Bar -->
      <template slot="top-bar">
        <public-top-bar
          :topBarsBtns="topBarsBtns"
          :search-list="searchList"
          @search="handleSearch"
        >
          <template slot="advanced">
            <!-- <a-date-picker format="YYYY-MM-DD HH:mm:ss" /> -->
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
              <p class="text">缺勤时间</p>
              <a-date-picker format="YYYY-MM-DD HH:mm:ss" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
              <p class="text">缺勤时间</p>
              <a-date-picker format="YYYY-MM-DD HH:mm:ss" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
              <p class="text">缺勤时间</p>
              <a-date-picker format="YYYY-MM-DD HH:mm:ss" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
              <p class="text">缺勤时间</p>
              <a-select default-value="lucy">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
                <a-select-option value="lucy">
                  Lucy
                </a-select-option>
                <a-select-option value="disabled" disabled>
                  Disabled
                </a-select-option>
                <a-select-option value="Yiminghe">
                  yiminghe
                </a-select-option>
              </a-select>
            </a-col>
          </template>
        </public-top-bar>
      </template>
      <!-- Tree -->
      <!-- <public-tree
        :tree-data="treeData"
        show-custom
        @select="handleTreeClick"
        checkable
      >
        <template slot="custom">
          <a-dropdown>
            <a-icon type="dash" />
            <a-menu slot="overlay">
              <a-menu-item v-for="item in treeMenuList" :key="item.key">
                <a href="javascript:;">{{ item.name }}</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>
      </public-tree> -->
      <a slot="name" slot-scope="scope">{{ scope.row.name }}</a>
    </public-table>
  </div>
</template>

<script>
const treeMenuList = [
  { name: "添加单位", key: "addUnit", permissionName: "添加单位" },
  { name: "添加下级分组", key: "addSubGroup", permissionName: "新增分组" }
];
const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" }
        ]
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" }
        ]
      },
      {
        title: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" }
    ]
  },
  {
    title: "0-2",
    key: "0-2"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 120,
    custom: true
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Gender",
    dataIndex: "gender"
  },
  {
    title: "Address",
    dataIndex: "address"
  },
  {
    title: "Tags",
    dataIndex: "tags"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    gender: "男",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    gender: "女",
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "8",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    gender: "男",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];
export default {
  name: "Table",
  data() {
    return {
      data,
      columns,
      treeData,
      isShowTree: false,
      btnName: "展示树组件",
      tableInfo: {
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        selectRows: [],
        selectRowsInfo: [],
        pageSizeOptions: ["10", "20", "30", "40", "50", "100"],
        changePageIndex: this.changePageIndex,
        changePageSize: this.changePageSize
      },
      treeMenuList,
      topBarsBtns: [
        {
          name: "新增",
          type: "primary",
          click: this.add
        },
        {
          name: "编辑",
          type: "primary",
          click: this.edit
        }
      ],
      searchList: [
        {
          key: "name",
          value: "学生姓名"
        },
        {
          key: "number",
          value: "学生学号"
        }
      ],
      operate: [
        {
          name: "编辑",
          fun: this.edit
        },
        {
          name: "删除",
          fun: ""
        },
        {
          name: "更多",
          dropdown: true,
          fun: this.handleMore,
          dropdownList: [
            {
              key: 1,
              name: "麻花藤"
            },
            {
              key: 2,
              name: "马芸"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 树节点点击
    handleTreeClick(item) {
      console.log(item);
    },
    // changePageIndex
    changePageIndex(page) {
      this.tableInfo.pageIndex = page;
      // this.getTableData(this.tableServices);
    },

    // changePageSize
    changePageSize(current, pageSize) {
      this.tableInfo.pageIndex = 1;
      this.tableInfo.pageSize = pageSize;
      // this.getTableData(this.tableServices);
    },
    handleShowTree() {
      this.isShowTree = !this.isShowTree;
      this.btnName = this.isShowTree ? "隐藏树组件" : "展示树组件";
    },
    add() {
      console.log("add");
      this.$router.push("/table/form");
    },
    edit(item) {
      console.log("edit", item);
    },
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log("onCheck", checkedKeys, info);
    },
    handleMore(item, { key }) {
      console.log(key);
    },
    // 搜索
    handleSearch({ key, value }) {
      console.log(key, value);
    }
  }
};
</script>

<style lang="less" scoped>
.table {
  /deep/ .ant-pagination {
    margin-right: 16px;
  }
}
</style>
