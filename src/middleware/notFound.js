
function notFound(req, res, next){
  res.status(404).json({error: 'resource not found'})
}

module.export = notFound;
