import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBar = styled.div`
    max-width:20%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:${props => props.bgColor};
    min-height:100Vh;
    padding-top:20px;
`
export const AlignItems = styled.nav`
    display:flex;
    align-items:center;
    background-color:${props => props.bgColor};
    padding:10px;
    padding-left:20px;
`
export const SideBarItem = styled.div`
    font-size:18px;
    margin-left:15px;
    color:${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right:12px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
`
export const LinkItem = styled(Link)`
  text-decoration:none;
`
