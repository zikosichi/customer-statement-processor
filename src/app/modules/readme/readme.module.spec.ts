import { ReadmeModule } from './readme.module';

describe('ReadmeModule', () => {
  let readmeModule: ReadmeModule;

  beforeEach(() => {
    readmeModule = new ReadmeModule();
  });

  it('should create an instance', () => {
    expect(readmeModule).toBeTruthy();
  });
});
