class Api::V1::TalksController < ApiController
  before_action :set_talk, only: [:show, :edit, :delete]

  def index
    render json: Talk.all, status: 200
  end

  def create
  end

  def show
    if @talk
      render json: @talk, status: 200
    else
      render json: { message: "Resource not found." }, status: 404
    end
  end

  def update
  end

  def delete
  end

  private
    def talk_params
      params.permit(:title, :description, :duration, :language, :teacher_id, :file_url)
    end

    def set_talk
      @talk = Talk.find_by(id: params[:id])
    end
end
