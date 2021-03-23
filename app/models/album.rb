class Album < ApplicationRecord
    include Genreable
    validates :title, :artist_id, :year, :credits, presence: true
    validates :title, uniqueness: { scope: :artist_id }
    validates :year, numericality: { minimum: 1950, maximum: 2022 }

    after_initialize :set_defaults

    belongs_to :artist,
        foreign_key: :artist_id,
        primary_key: :id,
        class_name: :User

    has_many :tracks, :dependent => :destroy

    has_many :genres, through: :genre_joins

    has_one_attached :photo

    def set_defaults
        self.price ||= 0
    end

end
