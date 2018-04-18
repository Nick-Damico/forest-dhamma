task :start do
  task :development do
    exec 'foreman start -p 3000'
  end
end

desc 'Start development server'
task :start => 'start:development'
