import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cifra } from './models/cifra.model';
import { User } from './models/user.model';
import { CifraModule } from './controllers/cifras/cifra.module';

@Module({
  imports: [     
    SequelizeModule.forRoot({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    autoLoadModels: true,
    synchronize: true,
    models: [Cifra, User],
  }),
  UserModule,
  CifraModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
