import { hash } from 'bcryptjs';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from './entity/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    try {
      const hashedPassword = await hash(password, 10)
      await User.insert({
        username,
        email,
        password: hashedPassword
      })
    } catch ({ message }) {
      console.log(message);
      return false;
    }
    return true;
  }
}