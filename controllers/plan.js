const Plan = require('../models/plan');

function indexRoute(req, res, next) {
  Plan
    .find()
    .populate('createdBy')
    .exec()
    .then((plans) => res.json(plans))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  console.log('req body', req.body);
  Plan
    .create(req.body)
    .then((plan) => res.status(201).json(plan))
    .catch(next);
}

function showRoute(req, res, next) {
  Plan
    .findById(req.params.id)
    .exec()
    .then((plan) => {
      if(!plan) return res.notFound();
      res.json(plan);
    })
    .catch((err) => {
      console.log('ERROR IN CATCH ===========>', err);
      next(err);
    });
}

function updateRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;

  Plan
    .findById(req.params.id)
    .exec()
    .then((plan) => {
      if(!plan) return res.notFound();

      plan = Object.assign(plan, req.body);
      return plan.save();
    })
    .then((plan) => res.json(plan))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Plan
    .findById(req.params.id)
    .exec()
    .then((plan) => {
      if(!plan) return res.notFound();

      return plan.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
