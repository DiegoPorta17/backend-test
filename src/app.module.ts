import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivisionModule } from './division/infrastructure/division.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionSchema } from './division/infrastructure/persistence/division.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'yamabiko.proxy.rlwy.net',
      port: 39826,
      username: 'root',
      password: 'slqYXIJiQhSZjibWSRxWqEZpjjTTsxNI',
      database: 'railway',
      entities: [DivisionSchema],
      synchronize: true,
    }),
    DivisionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
