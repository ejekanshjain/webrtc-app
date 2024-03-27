import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [userName, setUserName] = useState(
    'user-' + (Math.random() * 100).toFixed()
  )
  const [roomName, setRoomName] = useState('test')
  const router = useRouter()

  const handleLogin = (event: Event) => {
    event.preventDefault()
    router.push(`/room/${roomName}`)
  }
  return (
    <Component
      handleCredChange={(userName: string, roomName: string) => {
        setUserName(userName)
        setRoomName(roomName)
      }}
      userName={userName}
      roomName={roomName}
      handleLogin={handleLogin}
      {...pageProps}
    />
  )
}

export default MyApp
