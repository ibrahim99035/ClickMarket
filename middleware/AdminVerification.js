const verifyAdmin = (req, res, next) =>{
    if(req.user.isAdmin){
        next();
    } else{
        res.status(403).json('The current user is not an admin!');
    }
};

module.exports = {verifyAdmin};