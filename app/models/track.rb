class Track < ApplicationRecord
    include Genreable
    validates :track_name, :track_num, :price, :album_id, presence: true

    after_initialize :set_defaults
    has_many :genres, through: :genre_joins
    
    belongs_to :album
    
    has_one :artist, through: :album, source: :artist
    has_one_attached :song

    def set_defaults
        self.price ||= 0
        self.songUrl ||= ""
    end
end
