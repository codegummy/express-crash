const errorHandler = (err,req,res,next) => {
  if(err.status){
    res.status(err.status).json({mesg : err.message})

  }else{
    res.status(500).json({mesg : err.message})

  }
  
}

export default errorHandler