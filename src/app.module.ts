import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [AlumnosModule, CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
