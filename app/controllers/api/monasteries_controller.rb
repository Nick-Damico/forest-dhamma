class Api::MonasteriesController < ApiController
  before_action :set_monastery, only: [:show, :update]

  def index
    render json: Monastery.all, status: 200
  end

  def show
    if @monastery
      render json: @monastery, status: 200
    else
      render json: { message: "Resource not found" }, status: 404
    end
  end

  def update
    if @monastery.update(monastery_params)
      render json: @monastery, status: 200
    else
      render json: @monastery.errors, status: 400
    end
  end

  private
    def set_monastery
      @monastery = Monastery.find_by(id: params["id"])
    end

    def monastery_params
      params.permit(:likes)
    end
end
