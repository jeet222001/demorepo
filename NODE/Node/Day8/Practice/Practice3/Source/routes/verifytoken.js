let jwt = require('jsonwebtoken');

exports.jwt.verify(token, global.config.secretKey, {
    algorithm: global.config.algorithm
}, function (err, decoded) {
    if (err) {
        let errorData = {
            message: err.message,
            expiredAt: err.expiredAt
        };
        console.log(errorData);
        req.decoded = decoded;
        console.log(decoded);
        next();
        return res.status(401).json({
            success: false,
            message: 'Unauthorized Access',
        });

    }
    else {

        return status(403).json({
            message: 'Forbidden Denied',
        })
    }


})