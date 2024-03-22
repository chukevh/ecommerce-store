import rateLimit from "express-rate-limit"

// Rate limiter on requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 250, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
});

export {
    limiter
}