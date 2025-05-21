import { Test, TestingModule } from '@nestjs/testing';
import { ImagenesPerfilesController } from './imagenes-perfiles.controller';

describe('ImagenesPerfilesController', () => {
  let controller: ImagenesPerfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenesPerfilesController],
    }).compile();

    controller = module.get<ImagenesPerfilesController>(ImagenesPerfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
