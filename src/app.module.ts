import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

@Module({
  imports: [DatabaseModule, UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'], // Đường dẫn đến tệp schema SDL (nếu bạn không sử dụng autoSchemaFile)
      driver: ApolloDriver, // Thêm tùy chọn driver
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}