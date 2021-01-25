module Genreable
    extend ActiveSupport::Concern

    included do
        has_many :genre_joins,
            as: :genreable,
            class_name: :GenreJoin
    end

end