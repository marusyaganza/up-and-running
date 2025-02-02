# Step 1: Building containers
echo "Building server container..."
docker build -t mganza/up-and-running:server -f docker/Dockerfile.server .

echo "Building client container..."
docker build -t mganza/up-and-running:client \
 -f docker/Dockerfile.client .

# Step 2: Uploading containers
echo "Login to docker hub..."
docker login -u mganza

echo "Uploading server image to docker hub..."
docker push mganza/up-and-running:server

echo "Uploading client image to docker hub..."
docker push mganza/up-and-running:client

# Step 3: Cleaning up
echo "Cleaning up..."
docker logout
docker image rm mganza/up-and-running:server mganza/up-and-running:client