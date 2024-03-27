import Head from 'next/head'
import { useEffect, useState } from 'react'

interface Props {
  handleCredChange: (userName: string, roomName: string) => void
  handleLogin: () => void
  userName: string
  roomName: string
}

export default function Home({
  handleCredChange,
  handleLogin,
  userName: userNameG,
  roomName: roomNameG
}: Props) {
  const [roomName, setRoomName] = useState(roomNameG)
  const [userName, setUserName] = useState(userNameG)

  useEffect(() => {
    handleCredChange(userName, roomName)
  }, [roomName, userName, handleCredChange])

  return (
    <div>
      <Head>
        <title>
          Native WebRTC API with NextJS and Pusher as the Signalling Server
        </title>
        <meta
          name="description"
          content="Use Native WebRTC API for video conferencing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleLogin}>
        <h1>Lets join a room!</h1>
        <input
          onChange={e => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter Username"
        />
        <input
          onChange={e => setRoomName(e.target.value)}
          value={roomName}
          placeholder="Enter Room Name"
        />
        <button type="submit">Join Room</button>
      </form>
    </div>
  )
}
