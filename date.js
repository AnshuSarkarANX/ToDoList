module.exports = getDate;
function getDate() {
  var today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  return today.toLocaleDateString(undefined, options);
}
