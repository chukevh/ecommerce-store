const logger = (req, res, next) => {
    console.log("Time:", Date().toLocaleString())
    console.log("Request Method:", req.method)
    console.log("Request URL:", req.originalUrl)
    next()
}

export default logger