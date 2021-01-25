class Track < ApplicationRecord
    include Genreable
    validates :track_name, :track_num, :price, :album_id, presence: true

    belongs_to :album
end
