//
// npm test shapes -- -t plumb
//

import shapes from './shapes'

//test('test plumbing', () => {
    //console.log("Hello World from index.js");
    //console.log(shapes);
    //expect(shapes.hello()).toBe("Hello");
// });

test('test Shape', () => {
    const s = new shapes.Shape(1,2);
    expect(s.x).toBe(1);
    expect(s.y).toBe(2);
});

test('test Shape2', () => {
    const s = new shapes.Rectangle(1,2);
    expect(s.x).toBe(1);
    expect(s.y).toBe(2);
});

test('test Drawing', () => {
    const panel = new shapes.Drawing(401, 402);
    expect(panel.width).toBe(401);
    expect(panel.height).toBe(402);

    const k1 = panel.createRectangle(101, 102);
    expect(k1).toBe('k1');
});