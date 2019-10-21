json.track do
    json.extract! @track, :id, :title, :user_id
    json.audioUrl url_for(@track.audio)
    json.imageUrl url_for(@track.image) if @track.image.attached?
end

json.user do
    json.extract! @user, :id, :username
end