import { FindPipe } from './find.pipe';

describe('FilterPipe', () => {
  let pipe: FindPipe;

  beforeEach(() => {
     pipe = new FindPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should find 9', () =>{
    const items = [6,7,8,9,10];
    const item = pipe.transform(items, (item) => item === 9);
    expect(item).toBe(9);
  })

  it('should find Mahdi', () =>{
    const items = [{ name: "Mahdi"}, {name: "James"}];
    const item = pipe.transform(items, (item) => item.name === "Mahdi");
    expect(item).toEqual({
      name: "Mahdi"
    });
  })

  it('should find nothing', () =>{
    const items = [{ name: "Mahdi"}, {name: "James"}];
    const item = pipe.transform(items, (item) => item.name === "John");
    expect(item).toBeUndefined();
  })
});
