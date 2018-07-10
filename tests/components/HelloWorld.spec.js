import {expect, React, shallow} from '../specHelper'
import {HelloWorld} from "../../src/components/HelloWorld.tsx"

describe('Index.tsx', () => {
    it('renders', () => {
        const wrapper = () => shallow(<HelloWorld />);
        expect(wrapper().text()).to.equal('Hello World!')
    })
})