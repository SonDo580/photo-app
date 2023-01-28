# Create production build
npm run build

# Move into build directory
cd build

# Clone index.html to 200.html
cp index.html 200.html

# Deploying via surge
surge . sondo-photo-app.surge.sh