json.extract! @track, :id, :title
json.audioUrl url_for(@track.audio)