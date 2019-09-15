@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :user_id
        json.audioUrl url_for(track.audio)
    end
end