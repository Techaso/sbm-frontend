export const calcPercent = (count, total) => {
  return total > 0 ? ((count / total) * 100).toFixed(1) : "0";
};

export const countByField = (items, field, value) => {
  return items.filter((item) => item[field] === value).length;
};
