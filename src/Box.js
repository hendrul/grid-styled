import React from 'react'
import styled from 'styled-components/native'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import propTypes from './propTypes'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const alignSelf = (props)=> props.alignSelf

const Box = styled.View([],
  { boxSizing: 'border-box' },
	alignSelf,
  width,
  space,
  flex,
  order
)

const responsivePropType = oneOfType([
  number,
  string,
  array
])

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType
})

export default Box
