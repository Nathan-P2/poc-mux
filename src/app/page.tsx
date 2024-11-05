'use client'

import MuxPlayer from "@mux/mux-player-react"; 
import { useState } from "react";


export default function Home() {
  const [event, setEvent] = useState('')

  return (
    <div>
      <p>Player MUX</p>

      <p>Evento: {event}</p>

      <MuxPlayer
        playbackId="wJLuyoMNHi00CGrWAi01EDctqUp6EY00g00vWFNn52ZnPBQ"
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
        onCanPlay={() => setEvent('Pode dar play')}
        onPause={() => setEvent('Pausou o video')}
        onEnded={() => setEvent('Video acabou!')}
        onPlaying={() => setEvent('Video rodando!')}
        style={{
          width: "900px"
        }}
      />

    </div>
  );
}
