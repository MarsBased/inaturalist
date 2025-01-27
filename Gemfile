
source "https://rubygems.org"

ruby "~> 2.6.0"

gem "rails", "4.2.11.3"

gem "apipie-rails"
gem "actionpack-action_caching"
gem "actionpack-page_caching"
gem "activerecord-session_store"
gem "acts-as-taggable-on", "~> 5.0"
gem "acts_as_votable", "~> 0.12.0"
gem "ancestry"
gem "angular-rails-templates", git: "https://github.com/gaslight/angular-rails4-templates", ref: "v0.1.5"
gem "aws-sdk-cloudfront"
gem "aws-sdk-s3"
gem "aws-sdk-waf"
gem "biodiversity"
gem "capistrano", "~> 3.3"
gem "capistrano-rvm", "~> 0.1"
gem "capistrano-rails", "~> 1.1"
gem "capistrano-passenger", "~> 0.0"
gem "chroma"
gem "chronic"
gem "coffee-rails"
gem "cocoon" # JY: Added to support nested attributes for assessment_sections on assessments
gem "dbf" # Needed for georuby shapefile support
gem "delayed_job", "~> 4.1.5"
gem "delayed_job_active_record",
  git: "https://github.com/hugueslamy/delayed_job_active_record.git",
  ref: "7dcacc2459ad47c948153cc3bab78bc822191718"
gem "devise"
gem "devise-encryptable"
gem "devise-i18n"
gem "devise_suspendable"
gem "diffy"
gem "doorkeeper", "~> 5.0.3"
gem "dynamic_form"
gem "exifr", require: ["exifr", "exifr/jpeg", "exifr/tiff"]
gem "exiftool_vendored" # Vendored version includes exiftool and exiftool gem
gem "fastimage"
gem "flickraw-cached"
gem "friendly_id", "~> 5.2.4"
gem "gdata", git: "https://github.com/pleary/gdata.git"
gem "geoplanet"
gem "google-api-client", "=0.8.6"
gem "georuby"
gem "haml"
gem "htmlentities"
gem "icalendar", require: ["icalendar", "icalendar/tzinfo"]
gem "i18n-inflector-rails"
gem "i18n-js", git: "https://github.com/fnando/i18n-js.git"
gem "irwi", git: "https://github.com/Programatica/irwi.git"
gem "json"
gem "jquery-rails", "~> 4.3"
gem "koala"
gem "dalli"
gem "nokogiri", "~> 1.11.4"
gem "non-stupid-digest-assets"
gem "objectify-xml", git: "https://github.com/inaturalist/objectify_xml.git"
gem "omniauth", ">= 1.9.0"
gem "omniauth-oauth2", "1.6.0"
gem "omniauth-facebook", "~> 5.0.0"
gem "omniauth-flickr", git: "https://github.com/IDolgirev/omniauth-flickr.git", ref: "bcd202b0825659cbd984e611f6151f67c4aae591"
gem "omniauth-openid", git: "https://github.com/inaturalist/omniauth-openid"
gem "omniauth-orcid"
gem "omniauth-google-oauth2", "~> 0.7.0"
gem "omniauth-rails_csrf_protection"
gem "omniauth-soundcloud", git: "https://github.com/ratafire/omniauth-soundcloud.git"
gem "omniauth-twitter"
gem "omniauth-apple"
gem "paperclip", "~> 6.1.0"
gem "optimist"
gem "patron"
gem "pg"
gem "preferences", git: "https://github.com/kueda/preferences.git"
gem "rack-cors", "~> 1.0.6"
gem "rack-google-analytics", git: "https://github.com/kueda/rack-google-analytics.git", branch: "eval-blocks-per-request"
gem "rack-mobile-detect"
gem "rails-observers"
gem "rails-html-sanitizer", "~> 1.0.4"
gem "rails-i18n", "~> 4.0"
gem "rakismet"
gem "redcarpet"
gem "rest-client", require: "rest_client"
gem "riparian", git: "https://github.com/inaturalist/riparian.git"
gem "savon"   #allow to consume soap services with WSDL
gem "sass-rails", "5.0.7"
gem "soundcloud"
gem "sprockets", "~> 2.12.5"
gem "uglifier"
gem "utf8-cleaner"
gem "watu_table_builder", require: "table_builder"
gem "will_paginate"
gem "whenever", require: false
gem "ya2yaml"
gem "yajl-ruby", require: "yajl"
gem "yui-compressor"
gem "xmp", git: "https://github.com/inaturalist/xmp.git"
gem "rubyzip"
gem "elasticsearch-model"
gem "elasticsearch-rails"
gem "elasticsearch"
gem "elasticsearch-api"
gem "rgeo"
gem "rgeo-geojson"
gem "rgeo-shapefile"
gem "activerecord-postgis-adapter", git: "https://github.com/kueda/activerecord-postgis-adapter.git", branch: "activerecord42"
gem "terrapin"
gem "test_after_commit"

group :production do
  gem "newrelic_rpm", "~> 6.2.0"
end

group :test, :development, :prod_dev do
  gem "database_cleaner"

  # this fork fixes the `warning: constant ::Fixnum is deprecated` warnings
  # See https://github.com/notahat/machinist/pull/133
  gem "machinist", git: "https://github.com/narze/machinist", ref: "eaf5a447ff0d59a1fb2c49b91c6e1b2d95d8e4ee"

  gem "better_errors"
  gem "byebug"
  gem "binding_of_caller"
  gem "thin", "~> 1.7"
  gem "capybara", "~> 3.14"
  gem "puma"
end

group :test do
  gem "faker"
  gem "simplecov", require: false
  gem "rspec", "~> 3.8.0"
  gem "rspec-rails", "~> 3.8.2"
  gem "rspec-html-matchers"
  gem "webmock"
end
