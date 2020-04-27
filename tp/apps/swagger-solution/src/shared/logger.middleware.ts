export function logger(req, res, next) {
  console.log(`Call : ${req.url} - ${req.method}`);
  next();
}
