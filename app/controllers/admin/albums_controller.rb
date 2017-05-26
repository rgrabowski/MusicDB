class  Admin::AlbumsController < AdminController
  before_action :find_album, only:[:update,:destroy]
  #before_action :require_admin

  def new_album
    @album = Album.new
    @bands = Band.all.map{|b| [b.name ,b.id]}
    @artists = Artist.all.map{|b| [b.firstname ,b.id]}
  end

  def create
    @album = Album.new(album_params)
    #byebug
    if @album.save!
      redirect_to root_path
    else
      respond_to do |format|
        format.html { render admin_album_new_path }
        format.json { render json: @album.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
  private

  def find_album
    @album = Album.find(params[:id])
  end

  def album_params
    #,:category_id,:photos
    params.require(:album).permit(:name,:release_date,
    bandmenber_attributes: [:band_id,:artist_id])
  end
end