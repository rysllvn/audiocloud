json.track do
    json.extract! @track, :id, :title
    json.audioUrl url_for(@track.audio)
end

json.user do
    json.extract! @user, :id, :username
end