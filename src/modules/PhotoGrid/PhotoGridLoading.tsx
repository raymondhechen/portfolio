import { Html } from '@react-three/drei'
import styled, { useTheme } from 'styled-components'
import { CustomTheme } from '../../styles/theme'

const LoadingBarContainer = styled.div`
  display: flex;
  width: 300px;
  height: 5px;
  border-radius: 2px;
`

const LoadingBarProgress = styled.div`
  height: 100%;
  transition: width 0.2s ease;
`

const LoadingBar = ({ progress, theme }: { progress: number; theme: CustomTheme }) => {
  return (
    <LoadingBarContainer style={{ backgroundColor: theme.colors.gray5 }}>
      <LoadingBarProgress
        style={{ backgroundColor: theme.colors.accentSolid, width: `${progress}%` }}
      />
    </LoadingBarContainer>
  )
}

const PhotoGridLoading = ({ progress }: { progress: number }) => {
  const theme = useTheme()

  return (
    <Html as="div" center>
      <LoadingBar progress={progress} theme={theme} />
    </Html>
  )
}

export default PhotoGridLoading
