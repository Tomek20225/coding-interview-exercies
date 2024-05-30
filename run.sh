#!/bin/bash

LANGUAGE=$1
TASK=$2

if [ "$LANGUAGE" = "ts" ]; then
  TASK_DIR="typescript/task_$TASK"
  TEST_FILE="$TASK_DIR/task_${TASK}.test.ts"
  echo "Running TypeScript tests for Task $TASK..."
  npx jest $TEST_FILE
elif [ "$LANGUAGE" = "go" ]; then
  TASK_DIR="go/task_$TASK"
  echo "Running Go tests for Task $TASK..."
  go test $TASK_DIR/*.go
elif [ "$LANGUAGE" = "rs" ]; then
  TASK_DIR="rust/task_$TASK"
  echo "Running Rust tests for Task $TASK..."
  cd $TASK_DIR && cargo test
else
  echo "Unsupported language."
  exit 1
fi
