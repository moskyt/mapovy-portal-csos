set :stage, :staging

server "5.180.201.132",
	user: "mapserver_staging",
	roles: %w{app db web}

set :branch, "master"
set :deploy_to, "/var/www/mapserver_staging"
set :rails_env, "staging"
