const { gql, AuthenticationError } = require("apollo-server-express");
const  User  = require('../models/User');
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/auth");



const resolvers  = {
  Mutation: {
     async registerUser(_, { registerInput: { username, email, password } }) {
        //See if an old use exists with same username
        const existingUser = await User.findOne({ email });
  
        //Throw error if user exists
        if (existingUser) {
          throw new AuthenticationError(
            "A user is already registered with this email" + email,
            "USER_ALREADY_EXIST"
          );
        }
  
        //Encrypt password
        var encryptedPassword = await bcrypt.hash(password, 10);
  
        // Build out mongoose model
  
        const newUser = new User({
          username: username,
          email: email.toLowerCase(),
          password: encryptedPassword,
        });
  
        //Create our JWT
  
        const token = signToken( newUser._id, email )
     
        newUser.token = token;
  
        //Save User
  
        const res = await newUser.save();
        return {
          id: res.id,
          ...res._doc,
        };
      } 
 ,
    
    async loginUser(_, { loginInput: {email,password} }) {

        //See if user exists
        const user = await User.findOne({ email });

        //Check if password is correct
        if(user &&(await bcrypt.compare(password,user.model)))
        {


        //Create a new token
        const token = signToken( newUser._id, email )
     
        //Attach token to user model that above
        user.token=token;

        return {
            id:user.id,
            ...user._doc
        }
    }   else {

        throw  new AuthenticationError('Incorrect Credentials','INCORRECT_CREDENTIALS')
    }

}
 },

  Query: {
    user : () => User.find(),
  },
};


module.exports = resolvers;