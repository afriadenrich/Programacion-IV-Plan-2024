import { Test, TestingModule } from '@nestjs/testing';
import { PerfilesController } from './perfiles.controller';

describe('PerfilesController', () => {
  let controller: PerfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilesController],
    }).compile();

    controller = module.get<PerfilesController>(PerfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
