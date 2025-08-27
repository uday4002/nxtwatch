import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:${props => props.bgColor};
    padding:15px;
`
export const LogoLink = styled(Link)`
    text-decoration:none;
`
export const Logo = styled.img`
    height:32px;
    width:120px;
`
export const NavContainer = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin:0px;
`
export const ThemeButton = styled.button`
    background-color:transparent;
    outline:none;
    border:none;
    margin-right:15px;
`
export const Profile = styled.img`
    height:30px;
    width:30px;
    margin-right:15px;
`
export const LogoutButton = styled.button`
    border:1px solid ${props => props.color};
    background-color:${props => props.bgColor};
    color:${props => props.color};
    padding:10px;
    border-radius:2px;
    margin-right:15px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
