class Api::V1::TeachersController < ApiController
  before_action :set_teacher, only: [:show, :create, :update]

  def index
    render json: Teacher.all, status: 200
  end
end
