module.exports.index = (req, res, next) => {
  res.render('profile/profile', { title: 'Express' });
};
