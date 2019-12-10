const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
  //  authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await User.find();
}

async function getById(id) {

      return await User.find({'Email':id});
}       

async function create(userParam) {
    console.log("Service function for create"+userParam.Email);
    // validate
   // if (await User.findOne({ Email: userParam.Email })) {
     //   throw 'Email "' + userParam.Email + '" is already taken';
   // }
	console.log("UserParam"+userParam);
	console.log("Validation");
    if(userParam.PhoneNumber.toString().length != 10 || isNaN(userParam.PhoneNumber)){
        let obj = {};
        obj.name = "ValidationError";
        obj.message = "PhoneNumber length should be 10 digit and Integer";
        throw obj;
    }
console.log("Phonenumber validation crossed");
    const user = new User(userParam);
console.log("created user");
    // save user
    await user.save();
	console.log("after save");
}

async function update(id, userParam) {
    const user = await User.findOne({Email: id});

    // validate
    if (!user) throw 'User not found';
    if (user.Email !== userParam.Email && await User.findOne({ Email: userParam.Email })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.remove({Email: id});
}