class Api::TalksController < ApiController
  before_action :set_talk, only: [:show, :update, :destroy]

  def index
    render json: Talk.all, status: 200
  end

  def create
    @talk = Talk.new(talk_params)
    if @talk.save
      render json: { status: "success", talk: @talk }, status: 200
    else
      render json: { status: "error", message: @talk.errors }, status: 400
    end
  end

  def show
    if @talk
      render json: { staus: "success", talk: @talk }, status: 200
    else
      render json: { status: "error", message: "Resource not found." }, status: 404
    end
  end

  def update
    if @talk.update(talk_params)
      render json: @talk, status: 200
    else
      render json: @talk, status: 404
    end
  end

  def destroy
    if @talk.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this talk." }, status: 404
    end
  end

  private
    def talk_params
      params.permit(:title, :description, :duration, :favorites, :language, :teacher_id, :file_url, tags_attributes: [:name])
    end

    def set_talk
      @talk = Talk.find_by(id: params[:id])
    end
end
