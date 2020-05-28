import { compare, hash } from 'bcryptjs';
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { createAccessToken, createRefreshToken } from './helper/userHelper';
import { Context } from './Context';
import { User } from './entity/User';
import { isAuthenticated } from './middleware/isAuthenticated';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
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

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: Context
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const valid = await compare(password, user.password);
    if (!valid) throw new Error('Wrong password');

    res.cookie('gqid', createRefreshToken(user), { httpOnly: true });

    return { accessToken: createAccessToken(user) };
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