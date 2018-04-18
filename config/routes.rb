Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :monasteries, only: [:index, :show, :update]
      resources :teachers
      resources :talks
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end

end
