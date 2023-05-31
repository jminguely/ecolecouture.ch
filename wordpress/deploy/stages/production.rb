set :application, 'api.ecolecouture.ch'

set :stage, :production
set :branch, :main

set :deploy_to, '/api.ecolecouture.ch'
set :tmp_dir, '/api.ecolecouture.ch/tmp'

# Extended Server Syntax
# ======================
server 'api.ecolecouture.ch', user: 'ftpepa91058', roles: %w{web app db}

fetch(:default_env).merge!(wp_env: :production)

SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"
