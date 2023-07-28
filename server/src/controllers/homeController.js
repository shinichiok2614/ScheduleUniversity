let getHomePage = (req, res) => {
  console.log('gethomepage');
  return res.status(200).json({
    errCode: 0,
    message: 'hello world',
  });
};
// export default getHomePage
module.exports = {
  getHomePage,
};
