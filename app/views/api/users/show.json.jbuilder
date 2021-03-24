json.extract! @user, :username, :id, :artist_name, :email, :about, :personal_url
if @user.thumbnail.attached?
    json.thumbnailUrl url_for(@user.thumbnail)
end
if @user.banner.attached?
    json.bannerUrl url_for(@user.banner)
end