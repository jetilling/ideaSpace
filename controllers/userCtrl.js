var app = require('../index'),
    db = app.get('db')

module.exports = {

  publishNewPost: function(req, res) {
    db.publish_New_Post([req.body.title, req.body.post, req.body.id, req.body.titleStyles, req.body.bodyStyles], function(err, postedWorks){
      if (err) console.log(err);
      else res.status(200).send(req.body.id)
    })
  }

}
