class AddShowdateToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :show_date, :string
    add_column :tracks, :songUrl, :string
  end
end
