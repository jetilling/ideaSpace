var app = require('../index'),
    db = app.get('db')

module.exports = {

  publishNewPost: function(req, res) {
    db.publish_New_Post([req.body.title, req.body.post, req.body.id, req.body.titleStyles, req.body.bodyStyles, req.body.identificationString], function(err, postedWorks){
      if (err) console.log(err);
      else db.get_Display_Name([req.body.id, req.body.title], function(err, user){
        if (err) console.log(err)
        else res.status(200).send(user)
      }) 
    })
  }

}
