import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground:
        process.env.NODE_ENV === 'production'
          ? false
          : {
              settings: {
                'editor.theme': 'dark',
                'editor.fontSize': 14,
              },
            },
    }),
    TaskModule,
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
