desc "Dwonload `system` direcotry into local `public` directory"
task :download_system do
  on roles :all do
    within shared_path do
      with rails_env: fetch(:rails_env) do
        download! 'system', './public/', :recursive => true, :via => :scp
      end
    end
  end
end

task :pull do
end

before "pull", "db:pull", "download_system"
