import React, {useState, useRef} from 'react'
import { CloseButton, ModalBody, ModalContainer, SocialImage, SocialItem, SocialList, SocialText, TitleText } from './LoginModalElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '../../Assets/SocialIcons/facebook.png';
import GoogleIcon from '../../Assets/SocialIcons/google-big.png';
import TwitterIcon from '../../Assets/SocialIcons/twitter-big.png';
const index = (props) => {
    
  return (
    <>
        <ModalBody show={props.show} >
           
            <ModalContainer>
                <CloseButton onClick={props.handleClose}>
                    <FontAwesomeIcon icon={faXmark}/>
                </CloseButton>
                <TitleText>Login</TitleText>
                <SocialList>
                    <SocialItem>
                        <SocialImage src={FacebookIcon}/>
                        <SocialText>Facebook</SocialText>
                    </SocialItem>
                    <SocialItem>
                        <SocialImage src={GoogleIcon}/>
                        <SocialText>Google</SocialText>
                    </SocialItem>
                    <SocialItem>
                        <SocialImage src={TwitterIcon}/>
                        <SocialText>Twitter</SocialText>
                    </SocialItem>
                </SocialList>

            </ModalContainer> 
        </ModalBody>
             
    </>
  )
}

export default index