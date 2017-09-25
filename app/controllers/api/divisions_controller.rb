class Api::DivisionsController < ApplicationController
  
  def create
    @tournament = Tournament.find(params[:task][:tournament])
    division = @tournament.divisions.new(division_params)
    if division.save 
      render json: division 
    else 
      render json: { errors: division.errors.full_messages.join(',') }, status: 422
    end 
  end

  def update
  end

  private 
  def task_params
    params.require(:division).permit(:name, :competition_type, :number_of_teams)
  end
end
