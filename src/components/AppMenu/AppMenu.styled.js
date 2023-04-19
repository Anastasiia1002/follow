import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const Nav = styled.div`


display: flex;
flex-direction: column;
`

export const BoxLink=styled.div`
width: 100%;
height: 70px;
display: flex;
background-color: rgba(76, 39, 134, 0.6);
justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    gap: 50px;
`

export const StLink= styled(NavLink)`
text-decoration: none;
color: white;
cursor: pointer;
font-weight: 500;
  line-height: 24px;
  font-size: 30px;
`