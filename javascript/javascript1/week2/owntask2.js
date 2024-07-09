const data = [
  { id: 1, parent: 0, text: "this is a text 1" },
  { id: 2, parent: 0, text: "this is a text 2" },
  { id: 3, parent: 1, text: "this is a reply to text 3" },
  { id: 4, parent: 3, text: "this is a reply to a reply to text 4" },
];

function restructureArray(data) {
  const dataMap = {};
  const root = [];

  data.forEach((item) => {
    dataMap[item.id] = {
      ...item,
      children: [],
    };
  });

  data.forEach((item) => {
    const parent = dataMap[item.parent];
    if (parent) {
      parent.children.push(dataMap[item.id]);
    } else {
      root.push(dataMap[item.id]);
    }
  });
  return root;
}
