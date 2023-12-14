docker build --no-cache -f SQL\Dockerfile.PostgreSql -t final-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t final-java/app ../../..
