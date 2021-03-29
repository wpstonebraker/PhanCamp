json.extract! user, :username, :id, :artist_name, :email, :location, :personal_url, :about
if user.thumbnail.attached?
    json.thumbnailUrl url_for(user.thumbnail)
end
if user.banner.attached?
    json.bannerUrl url_for(user.banner)
end