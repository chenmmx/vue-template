<template>
  <div class="table">
    <public-top-bar></public-top-bar>
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 900, y: 300 }"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action">
        <a>编辑</a>
        <a-divider type="vertical" />
        <a>删除</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">更多<a-icon type="down" /> </a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    width: 120,
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    width: 200,
    scopedSlots: { customRender: "action" }
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
  }
];
export default {
  name: "Table",
  data() {
    return {
      data,
      columns
    };
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
