#!/bin/bash

# Source the environment variables
source ./env

# Create a new file with the environment variables replaced
envsubst < main.js > main_output.js
