pub fn reverse_string(input: &str) -> String {
    input.chars().rev().collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_reverse_string() {
        let input = "hello";
        let expected_output = "olleh";
        assert_eq!(reverse_string(input), expected_output);
    }
}
