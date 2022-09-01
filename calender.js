exports.Date = function () {
  var today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  return today.toLocaleDateString(undefined, options);
};
