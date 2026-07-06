#!/bin/bash
# Script deploy otomatis untuk VM
set -e

cd /opt/simbill
echo "Pulling latest code from GitHub..."
git pull origin main

echo "Installing dependencies..."
cd backend
npm install

echo "Restarting PM2 service..."
pm2 restart billing-radius

echo "Deploy completed!"
pm2 status
