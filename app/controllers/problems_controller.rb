class ProblemsController < ApplicationController
  before_action :set_problem, only: [:show, :destroy]

  def show

  end

  def index
    @problems = Problem.all
  end

  def new
    @problem = Problem.new
  end

  def create
    @problem = Problem.new(problem_params)
    @problem.save
    redirect_to root_path
  end

  def upvote
    @problem = Problem.find(params[:id])
  end

  private

  def set_problem
    @problem = Problem.find(params[:id])
  end

  def problem_params
    params.require(:problem).permit(:name, :title, :email, :description)
  end

end
