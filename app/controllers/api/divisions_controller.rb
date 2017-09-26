class Api::DivisionsController < ApplicationController
  before_action :set_tournament
  before_action :set_division, only: [:update, :destroy]

  def index
    render :json => Division.all.to_json(:include => { :category => { :only => :id }})
  end

  def create
    division = @tournament.divisions.new(division_params)
    if division.save
      render json: division.to_json(:include => { :category => { :only => :id }})
    else
      render json: { errors: division.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @division.update(division_params)
      render json: division.to_json(:include => { :category => { :only => :id }})
    else
      render json: { errors: division.errors.full_messages.join(', ')}, status: 422
    end
  end

  def destroy
    @division.destroy
  end

  private
  def division_params
    params.require(:division).permit(:name, :competition_type, :number_of_teams)
  end

  def set_tournament
    @tournament = Tournament.find(params[:division][:tournament])
  end

  def set_division
    @division = Division.find(params[:id])
  end
end
