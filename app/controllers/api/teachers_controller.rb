class Api::TeachersController < ApiController
  before_action :set_teacher, only: [:show, :create, :update]

  def index
    render json: Teacher.all, status: 200
  end

  def show
    render json: @teacher, status: 200
  end
end

private
  def set_teacher
    @teacher = Teacher.find_by(id: params[:id]);
  end
