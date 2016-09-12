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

  end

  private

  def set_problem

  end

  def problem_params
    params.require(:problems).permit(:name, :title, :email, :description)
  end

end
