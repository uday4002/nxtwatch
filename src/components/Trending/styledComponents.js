import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  display:flex;
`
export const TrendingContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingText = styled.h1`
  font-family: Roboto;
  font-size: 35px;
  color: ${props => props.color};
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  overflow:auto;
  max-height:80vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
