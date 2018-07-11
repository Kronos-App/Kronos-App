import { expect, React, shallow } from '../specHelper'
import { Main } from '../../src/components/Main.jsx'

describe('Main.jsx', () => {
  let wrap
  beforeEach(() => {
    wrap = (props = {}) => shallow(<Main {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('displays an Appbar', () => {
    const wrapper = wrap()
    expect(wrapper.find('WithStyles(AppBar)')).length(1)
  })
})
