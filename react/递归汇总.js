import React from "react";

const treeData1 = [
  {
    name: "1",
    children: [
      {
        name: "1-1",
      },
      {
        name: "1-2",
        children: [
          {
            name: "1-2-1",
          },
        ],
      },
      {
        name: "1-3",
      },
    ],
  },
  {
    name: "2",
    children: [
      {
        name: "2-1",
      },
    ],
  },
];

const treeData2 = {
  key: 0, //标识唯一性
  title: "全国", //节点名称显示
  children: [
    //子节点数组
    {
      key: 6,
      title: "北方区域",
      children: [
        {
          key: 1,
          title: "黑龙江省",
          children: [
            {
              key: 6,
              title: "哈尔滨",
            },
          ],
        },
        {
          key: 2,
          title: "北京",
        },
      ],
    },
    {
      key: 3,
      title: "南方区域",
      children: [
        {
          key: 4,
          title: "上海",
        },
        {
          key: 5,
          title: "深圳",
        },
      ],
    },
  ],
};

export default function Complex() {
  return (
    <div>
      <Item1 dataItem1={treeData1} />
      <Item2 dataItem2={treeData2} />
    </div>
  );
}

function Item1(props) {
  const { dataItem1 } = props;
  return (
    <div>
      {dataItem1.map((item, index) => {
        return (
          <div>
            <div key={index}>{item.name}</div>
            <div key={item.name}>
              {item.children && Array.isArray(item.children) && (
                <Item1 key={item.name} dataItem1={item.children} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Item2(props) {
  const { title, children } = props.dataItem2;
  const hasChildren = children && Array.isArray(children);
  return (
    <div>
      {title}
      {hasChildren &&
        children.map((item) => {
          return <Item2 key={item.key} dataItem2={item} />;
        })}
    </div>
  );
}
