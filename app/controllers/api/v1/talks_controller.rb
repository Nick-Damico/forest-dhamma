class Api::V1::TalksController < ApiController
  before_action :set_talk, only: [:show, :update, :destroy]

  def index
    render json: Talk.all, status: 200
  end

  def create
    talk = Talk.new(talk_params)
    if talk.save
      render json: talk, status: 200
    else
      render json: { message: talk.errors }, status: 400
    end
  end

  def show
    if @talk
      render json: @talk, status: 200
    else
      render json: { message: "Resource not found." }, status: 404
    end
  end

  def update
    if @talk.update(talk_params)
      render json: @talk, status: 204
    else
      render json: { message: @talk.errors }, status: 400
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
      params.permit(:title, :description, :duration, :language, :teacher_id, :file_url)
    end

    def set_talk
      @talk = Talk.find_by(id: params[:id])
    end
end
