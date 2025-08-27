import {Component} from 'react'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SideBar,
  AlignItems,
  SideBarItem,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
  LinkItem,
} from './styledComponents'

class NavigationBar extends Component {
  render() {
    return (
      <>
        <ThemeAndVideoContext.Consumer>
          {value => {
            const {isDarkTheme, activeTab, changeTab} = value
            const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
            const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
            const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

            const onClickHomeTab = () => {
              changeTab('Home')
            }

            const onClickTrendingTab = () => {
              changeTab('Trending')
            }

            const onClickGamingTab = () => {
              changeTab('Gaming')
            }

            const onClickSavedTab = () => {
              changeTab('Saved')
            }

            return (
              <SideBar bgColor={bgColor}>
                <div>
                  <LinkItem to="/">
                    <AlignItems
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBg : ''}
                      onClick={onClickHomeTab}
                    >
                      <TiHome
                        size={18}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <SideBarItem color={textColor}>Home</SideBarItem>
                    </AlignItems>
                  </LinkItem>
                  <LinkItem to="/trending">
                    <AlignItems
                      key="trending"
                      bgColor={activeTab === 'Trending' ? activeTabBg : ''}
                      onClick={onClickTrendingTab}
                    >
                      <HiFire
                        size={18}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <SideBarItem color={textColor}>Trending</SideBarItem>
                    </AlignItems>
                  </LinkItem>
                  <LinkItem to="/gaming">
                    <AlignItems
                      key="gaming"
                      bgColor={activeTab === 'Gaming' ? activeTabBg : ''}
                      onClick={onClickGamingTab}
                    >
                      <SiYoutubegaming
                        size={18}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <SideBarItem color={textColor}>Gaming</SideBarItem>
                    </AlignItems>
                  </LinkItem>
                  <LinkItem to="/saved-videos">
                    <AlignItems
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeTabBg : ''}
                      onClick={onClickSavedTab}
                    >
                      <CgPlayListAdd
                        size={18}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <SideBarItem color={textColor}>Saved Videos</SideBarItem>
                    </AlignItems>
                  </LinkItem>
                </div>
                <ContactInfo>
                  <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                  <ContactIcons>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIcons>
                  <ContactNote color={textColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactNote>
                </ContactInfo>
              </SideBar>
            )
          }}
        </ThemeAndVideoContext.Consumer>
      </>
    )
  }
}
export default NavigationBar
