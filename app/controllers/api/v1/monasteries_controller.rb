class Api::V1::MonasteriesController < ApiController
  before_action :set_monastery, only: [:show]
  
  def index
    render json: Monastery.all
  end

  def show
    if @monastery
      render json: @monastery, status: 200
    else
      render json: { message: "Resource not found" }, status: 404
    end
  end

  private
    def set_monastery
      @monastery = Monastery.find_by(id: params["id"])
    end
end
