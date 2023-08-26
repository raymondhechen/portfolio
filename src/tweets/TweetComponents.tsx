import Image from 'next/image'
import { TwitterComponents } from 'react-tweet'

export const tweetComponents: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}
