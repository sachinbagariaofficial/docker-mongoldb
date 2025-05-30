FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=sachin

# we are making a folder with the name of testapp
RUN  mkdir -p testapp

# Here we copy our whole file in nodejs folder 
COPY . /testapp  

# this is used for staring our node js project
CMD [ "node" ,"/testapp/index.js" ] 



# Now we have to run this command to run on terminal to create an image of our project and run this command in the  folder where our project is 
# docker build -t testapp:1.0 .

# After creating the image of name testapp , then we have to create an conatiner for that to access our app so we write this command in same folder terminal 
# docker run -it testapp:1.0 bash

