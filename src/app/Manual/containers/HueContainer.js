/* @flow */

import { connect } from 'react-redux'
import { changeSaturation, changeBrightness } from '@store/hue'
import { createContainer } from '@helpers/redux'

const mapStateToProps = ({ hue }) => ({ hue })
const mapDispatchToProps = { changeSaturation, changeBrightness }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
