function errorHandler(err, req, res, next){
  console.log('__SERVVER ERROR', err);
  res.status(500).json({error: err.message})
}

module.export = errorHandler;