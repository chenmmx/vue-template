const list = [
  {
    key: "/home",
    title: "首页",
    select: true
  },
  {
    key: "/table",
    title: "列表",
    select: true
  },
  {
    key: "/form",
    title: "表单",
    select: true
  },
  {
    key: "/test",
    title: "测试",
    select: true,
    children: [
      {
        key: "/test/child",
        title: "子组件",
        select: true
      }
    ]
  }
];

export default list;
