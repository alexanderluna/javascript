const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class User {
  constructor(user) {
    this.id = user && user.id;
    this.name = user && user.name;
    this.email = user && user.email;
    this.password = user && user.password;
  }


  static async findById(id) {
    const user = await prisma.user.findOne({
      where: { id: parseInt(id) },
    });
    if (user) return new User(user);
    throw new Error('User not found');
  };


  static async findBy(userFields) {
    const user = await prisma.user.findOne({
      where: { ...userFields },
    });
    if (user) return new User(user);
    throw new Error('User not found');
  }


  static async findAll(limit = 10) {
    return await prisma.user.findMany({
      take: parseInt(limit),
    });
  }


  static getAccessToken(id) {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  }


  async create() {
    if (!this.password) throw new Error('Missing password');
    const hashedPassword = await bcrypt.hash(this.password, 10);
    return await prisma.user.create({
      data: {
        name: this.name,
        email: this.email,
        password: hashedPassword,
      },
    });
  }


  async update() {
    if (!this.id) throw new Error('User not found');
    const user = await User.findById(this.id);
    const match = await bcrypt.compare(this.password, user.password);
    if (!match) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    console.log(this.email);
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(this.id) },
      data: {
        name: this.name || user.name,
        email: this.email || user.email,
        password: this.password || user.password,
      },
    });
    if (!updatedUser) throw new Error('Failed to update user');
    return updatedUser;
  }


  async delete() {
    if (!this.id) throw new Error('User not found');
    const deletedUser = await prisma.user.delete({
      where: { id: parseInt(this.id) },
    });
    if (!deletedUser) throw new Error('Could not delete user');
    return deletedUser;
  }
}

module.exports = User;
