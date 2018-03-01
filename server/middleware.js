module.exports=(req,res,next)=>
    {
        if (!req.session.user)
        {
            req.session.user = {userid:0, current_playing:''}
        }
        next();
    }