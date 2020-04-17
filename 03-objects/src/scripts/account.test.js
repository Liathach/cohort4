//
// npm test -- -t whatever
//
import accfuncs from './account.test.js';

test('Test the plumbing', () => {
    console.log("Test the unit test plumbing");
    console.log(accfuncs.play());
})