import React from 'react'
import { Body, BodyContainer } from './BodyElements'

const index = (props) => {
  return (
    <>
        <BodyContainer>
            <Body>
                {props.children}
            </Body>
        </BodyContainer>
    </>
  )
}

export default index