
function checkTime(req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res
        .status(403)
        .send(" Closed!!! Come in (Monday to Friday, from 9 to 17).");
    }
  }
  
  module.exports = checkTime;