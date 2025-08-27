import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  display:flex;
`
export const GamingContainer = styled.div`
  display:flex;
  flex-direction:column;
  max-width:80%;
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingText = styled.h1`
  font-family: Roboto;
  font-size: 35px;
  color: ${props => props.color};
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  margin-left: 40px;
  overflow:auto;
  max-height:80vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
