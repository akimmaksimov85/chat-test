FROM php:7.2-fpm

RUN apt-get update -y && apt-get install -y libmcrypt-dev openssl && apt-get install -y curl && apt-get install -y git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && rm -rf composer.phar
RUN mkdir /var/www/scaut-test && cd /var/www && chown -R www-data:www-data /var/www/scaut-test && cd /var/www/scaut-test

RUN git clone https://github.com/akimmaksimov85/scaut-test.git /var/www/scaut-test

WORKDIR /var/www/scaut-test
CMD ["php-fpm"]
