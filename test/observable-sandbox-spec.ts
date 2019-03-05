import * as chai from 'chai';
import { Subscription } from 'rxjs/Subscription';
import { ObservableSandbox } from '../src/observable-sandbox';

describe('takeUntilTimer', () => {

    it('5sで止まる', () => {
        const target = new ObservableSandbox();

        chai.assert.equal(target.takeUntilTimer(), new Subscription);
    })
});
