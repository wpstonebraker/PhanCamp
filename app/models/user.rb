class User < ApplicationRecord
    include Genreable
    validates :username, :password_digest, :session_token, :artist_name, :email, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    
    after_initialize :ensure_session_token, :set_defaults

    attr_reader :password

    def set_defaults
        self.about ||= ""
        self.personal_url ||= ""
        self.location ||= ""
    end
    # def set_defaults
    #     self.banner ||= self.banner.attach(io: File.open("app/assets/images/thumb.png"), filename: "guestthumb.png")
    #     self.thumbnail ||= self.thumbnail.attach(io: File.open("app/assets/images/hiro.jpeg"), filename: "hiro.jpeg")
    # end

    has_many :albums,
        foreign_key: :artist_id

    has_many :genres, through: :genre_joins

    has_many :tracks, through: :albums, source: :tracks

    has_one_attached :thumbnail
    has_one_attached :banner
    has_one_attached :profile_pic

    # Class method for finding a user ONLY if we have the correct username and password
    def self.find_by_credentials(username, password)
        # find the user in the db via their username
        user = User.find_by(username: username)
        # return nil if there is no user by that username
        return nil unless user
        # use our method we created to see how the password they gave us compares to their password digest
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        # Use BCrypt's built-in method for checking if the password provided is the user's password
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    
    def password=(password)
        # Set temporary instance variable so that we can validate length
        @password = password
        # Create a password_digest so that we do not have to store the plain-text password in our DB
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token
        # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
        self.session_token = SecureRandom.urlsafe_base64
        # save the reset to the db
        self.save
        # return session_token, this helps with our CELLL methods
        self.session_token
    end
    
    private

    def ensure_session_token
        # Generate the initial session_token so that we pass the validation
        # This method runs right after the model is initialized, before any validations are run
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
