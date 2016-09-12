class ProblemsController < ApplicationController

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

  private

  def set_problem

  end

  def problem_params
    params.require(:problem).permit(:name, :title, :email, :description)
  end

end
