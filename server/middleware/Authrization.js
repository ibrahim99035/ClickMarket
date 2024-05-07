const verifyAuth = (req, res, next) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next();
    } else{
        res.status(403).json('You Are Not Alowed to do THAT!');
    }
};

module.exports = {verifyAuth};