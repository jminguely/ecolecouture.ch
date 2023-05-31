set :repo_url, 'git@github.com:jminguely/ecolecouture.ch.git'

set :branch, :main

set :log_level, :info

set :linked_files, fetch(:linked_files, []).push('.env', 'web/.htaccess')
set :linked_dirs, fetch(:linked_dirs, []).push('web/app/uploads')
