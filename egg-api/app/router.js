/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/cate/add', controller.cate.create);
  router.get('/cate/list', controller.cate.list);
};
