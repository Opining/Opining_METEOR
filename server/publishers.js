Meteor.publish("messages", function () {
  return Meteor.users.find({});
});

Meteor.publish("queue", function () {
  return Meteor.users.find({});
});
