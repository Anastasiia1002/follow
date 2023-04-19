import React from 'react'
import {Box, ImgLogo, ImgPicture, Tape, ImageDiv, Avatar, ImgAvatar, UserInfo,Text, Button} from './card.styled'
import logo from '../../access/Logo.png';
import picture from '../../access/picture2 1.png';


const Card = ({user}) => {
     const followers = user.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // console.log(user.followers)
    // console.log(typeof user.followers)
    
    console.log(followers)
  return (
    <Box>
        <ImageDiv>
<ImgLogo src={logo} alt='logo'/>
<ImgPicture src={picture} alt='picture'/>
</ImageDiv>
<Tape></Tape>
<Avatar>
    <ImgAvatar src={user.avatar} alt='avatar' />
</Avatar>
<UserInfo>
    <Text> {user.tweets} TWEETS</Text>
    <Text>{user.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} FOLLOWERS</Text>
    <Button type='button' >FOLLOW</Button>
</UserInfo>
    </Box>
  )
}

export default Card