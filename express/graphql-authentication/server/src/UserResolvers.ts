import { compare, hash } from 'bcryptjs';
import { Arg, Ctx, Field, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { createAccessToken, createRefreshToken } from './helper/userHelper';
import { Context } from './Context';
import { User } from './entity/User';
import { isAuthenticated } from './middleware/isAuthenticated';
import { sendRefreshToken } from './helper/indexHelper';
import { getConnection } from 'typeorm';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;

  @Field()
  error: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(isAuthenticated)
  bye(@Ctx() { payload }: Context) {
    return `User with id: ${payload!.id} just left`;
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokenForUser(@Arg('userId', () => Int) id: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id }, 'tokenVersion', 1);
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: Context
  ): Promise<LoginResponse> {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error('User not found');

      const valid = await compare(password, user.password);
      if (!valid) throw new Error('Wrong password');

      sendRefreshToken(res, createRefreshToken(user))
      return { accessToken: createAccessToken(user), error: '' };
    } catch ({ message }) {
      return { accessToken: '', error: message };
    }
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') plainPassword: string,
  ) {
    try {
      const password = await hash(plainPassword, 10)
      await User.insert({ username, email, password });
    } catch ({ message }) {
      console.log(message);
      return false;
    }
    return true;
  }
}