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
    redirect_to problems_path
  end

  def upvote
    @problem = Problem.find(params[:id])
    session[:voting_id] = request.remote_ip
    @voter = VotingSession.find_or_create_by(ip: session[:voting_id])
    if @voter.voted_for? @problem
      @voter.unvote_for @problem
    else
      @voter.up_votes @problem
    end
  end

  private

  def set_problem
    @problem = Problem.find(params[:id])
  end

  def problem_params
    params.require(:problem).permit(:name, :title, :email, :description)
  end

end
