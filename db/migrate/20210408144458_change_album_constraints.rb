class ChangeAlbumConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :albums, :credits, true
  end
end
