function filter_list(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      result.push(list[i]);
    }
  }

  return result;
}
