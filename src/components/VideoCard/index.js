import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
  LinkItem,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const VideoCard = props => {
  const {videosList, onRetry} = props
  const videosCount = videosList.length

  console.log(videosList)

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return videosCount > 0 ? (
          <VideoCardList>
            {videosList.map(eachVideo => (
              <LinkItem
                to={`/videos/${eachVideo.id}`}
                className="link"
                key={eachVideo.id}
              >
                <ListItem>
                  <ThumbNailImage
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoDetails>
                    <ProfileImage
                      src={eachVideo.profileImageUrl}
                      alt="channel logo"
                    />
                    <ContentSection>
                      <Title color={textColor}>{eachVideo.title}</Title>
                      <ChannelName color={textColor}>
                        {eachVideo.name}
                      </ChannelName>
                      <ViewsAndDate color={textColor}>
                        {eachVideo.viewCount} views<Dot> &#8226; </Dot>{' '}
                        {eachVideo.publishedAt}
                      </ViewsAndDate>
                    </ContentSection>
                  </VideoDetails>
                </ListItem>
              </LinkItem>
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
