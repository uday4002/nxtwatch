import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GlobalStyle,
  LoginContainer,
  FormContainer,
  WebsiteLogo,
  Label,
  InputContainer,
  AlignItems,
  CheckBox,
  ShowPassword,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUserName = e => {
    this.setState({userName: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  clickOnShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  formSubmit = async e => {
    e.preventDefault()
    const {userName, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({username: userName, password: password}),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, { expires: 7 })
      history.replace('/')
    } else {
      this.setState({showErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {userName, password, showPassword, showErrorMsg, errorMsg} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GlobalStyle />
              <LoginContainer isDark={isDarkTheme}>
                <FormContainer isDark={isDarkTheme} onSubmit={this.formSubmit}>
                  {isDarkTheme ? (
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}

                  <Label isDark={isDarkTheme} htmlFor="userName">
                    USERNAME
                  </Label>
                  <InputContainer
                    isDark={isDarkTheme}
                    placeholder="Username"
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={this.onChangeUserName}
                  />
                  <br />
                  <Label isDark={isDarkTheme} htmlFor="Password">
                    PASSWORD
                  </Label>
                  <InputContainer
                    isDark={isDarkTheme}
                    placeholder="Password"
                    id="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <AlignItems>
                    <CheckBox
                      type="checkbox"
                      id="ShowPassword"
                      onChange={this.clickOnShowPassword}
                    />
                    <ShowPassword isDark={isDarkTheme} htmlFor="ShowPassword">
                      Show Password
                    </ShowPassword>
                  </AlignItems>
                  <br />
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
