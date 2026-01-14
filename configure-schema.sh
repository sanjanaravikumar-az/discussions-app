#!/bin/bash

set -euxo pipefail

cp -f schema.graphql ./amplify/backend/api/discussionsapp/schema.graphql
