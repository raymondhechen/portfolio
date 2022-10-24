import { Html, useProgress } from '@react-three/drei'
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

const LoadingBar = ({
  progress,
  required,
  theme,
}: {
  progress: number
  required: number
  theme: CustomTheme
}) => {
  return (
    <LoadingBarContainer style={{ backgroundColor: theme.colors.gray5 }}>
      <LoadingBarProgress
        style={{
          backgroundColor: theme.colors.accentSolid,
          width: `${(progress / required) * 100}%`,
        }}
      />
    </LoadingBarContainer>
  )
}

const PhotoGridLoading = ({ progress: externalProgress }: { progress: number }) => {
  const { loaded, total } = useProgress()
  const theme = useTheme()

  const internalProgress = (loaded / total) * 100
  const totalProgress = externalProgress + internalProgress
  const totalRequired = 200

  return (
    <Html as="div" center>
      <LoadingBar progress={totalProgress} required={totalRequired} theme={theme} />
    </Html>
  )
}

export default PhotoGridLoading
