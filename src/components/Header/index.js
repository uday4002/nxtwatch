import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LogoLink,
  HeaderContainer,
  Logo,
  NavContainer,
  ThemeButton,
  Profile,
  LogoutButton,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
} from './styledComponents'

const Header = props => {
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const color = isDarkTheme ? '#ffffff' : '#00306e'
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

        const changeTheme = () => {
          toggleTheme()
        }

        const onClickLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <HeaderContainer bgColor={bgColor}>
            <LogoLink to="/">
              <Logo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </LogoLink>
            <NavContainer>
              <ThemeButton data-testid="theme" onClick={changeTheme}>
                {isDarkTheme ? (
                  <IoSunnyOutline color="#ffffff" size={24} />
                ) : (
                  <FaMoon size={24} />
                )}
              </ThemeButton>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton color={color} bgColor={bgColor}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </NavContainer>
          </HeaderContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default withRouter(Header)
