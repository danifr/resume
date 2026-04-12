FROM ruby:3.2

WORKDIR /home/app

COPY Gemfile* ./

RUN bundle install

COPY . .

CMD [ "bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0" ]
