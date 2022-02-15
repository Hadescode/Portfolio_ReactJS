#Build reactjs app with production mode
npm run build

#Move to build folder
cd build

#CLone index.html into 200.html
cp index.html 200.html

# Start deploy via Surge
# The command means deploy current folder to doamain paul
surge . portfolio-reactjs-app.surge.sh
