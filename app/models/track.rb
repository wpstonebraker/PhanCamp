class Track < ApplicationRecord
    include Genreable
    validates :track_name, :track_num, :price, :album_id, presence: true

    has_many :genres, through: :genre_joins


    belongs_to :album
end
