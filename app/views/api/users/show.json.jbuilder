json.extract! @user, :username, :id, :artist_name, :email, :about, :personal_url, :location
if @genresIds != nil
    json.genre_ids @genresIds
else
    json.extract! @user, :genre_ids
end
if @user.thumbnail.attached?
    json.thumbnailUrl url_for(@user.thumbnail)
end
if @user.banner.attached?
    json.bannerUrl url_for(@user.banner)
end