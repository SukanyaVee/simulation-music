module.exports=(req,res,next)=>
    {
        if (!req.session.user)
        {
            request.session.user = {userid:0}
        }
        next();
    }