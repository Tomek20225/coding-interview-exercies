package main

import "testing"

func TestReverseString(t *testing.T) {
    input := "hello"
    expectedOutput := "olleh"
    result := reverseString(input)
    if result != expectedOutput {
        t.Errorf("Expected %v, got %v", expectedOutput, result)
    }
}
