const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    const userId = req.params.userId;
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: req.body },
        { runValidators: true, new: true },
      );

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      };

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },  
  
  async deleteUser(req, res) {
    const userId = req.params.userId;

    try {
      const user = await User.findByIdAndDelete(userId);

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      };

      res.status(200).json({ msg: "Success - User Deleted", user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    try {
      const user = await User.findById(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      };

      // confirm the friend ID provided matches an existing user before adding
      const friend = await User.findById(friendId);
      if (!friend) {
        return res.status(404).json({ msg: 'No user found with that friend ID'});
      }

      user.friends.push(friendId);
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    try {
      const user = await User.findById(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      };

      // confirm friend id to be deleted exists within user.friends array
      if (!user.friends.includes(friendId.toString())) {
        return res.status(404).json({ msg: "No matching friend found for selected user" });
      };

      user.friends.pull(friendId);
      await user.save();
      res.status(200).json({ msg: "Friend Removed", user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
