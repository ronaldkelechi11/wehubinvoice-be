import { InvoiceModule } from './routes/invoice/invoice.module';
import { UserModule } from './routes/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseConfigService } from './utils/db/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    InvoiceModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
