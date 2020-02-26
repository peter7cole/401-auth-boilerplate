
function errorHandler(err, req, res, next){
  console.log('__SERVVER ERROR__', err);
  res.status(500).json({error: err.message})
}

module.export = errorHandler;
