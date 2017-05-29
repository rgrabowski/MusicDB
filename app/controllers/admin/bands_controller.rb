class Admin::BandsController < AdminController
  before_action :set_band, only:[:update,:destroy]
  def index_band
  end

  def new_band
    @band = Band.new
    @artists = Artist.all.map{|x| ["#{x.firstname} #{x.lastname}" ,"#{x.id}"]}

  end

  def create
    @band = Band.new(band_params)
    if @band.save!
      if params[:artists]
        params[:artists].each do |artist|
          @bandmembers = @band.bandmembers.build(artist_id: artist)
          @bandmembers.save
        end
      end
      if params[:images]
        params[:images].each do |image|
          @band.photos.create(image: image)
        end
      else
        @band.photos.create
      end
      flash[:success] = "Band #{@band.name} is created"
      redirect_to admin_bands_path
    else
      respond_to do |format|
        format.html {redirect_to admin_bands_new_path}
        format.json {render @band.errors , status: :unprocessable_entity}
      end
    end
  end

  private

  def band_params
    params.require(:band).permit(:name,:genre,:description,:artist,:photos,bandmembers:[:band_id,:artist_id])
  end
end