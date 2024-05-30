import unittest
from task_01 import reverse_string

class TestReverseString(unittest.TestCase):
    def test_reverse_string(self):
        input = "hello"
        expected_output = "olleh"
        self.assertEqual(reverse_string(input), expected_output)

if __name__ == '__main__':
    unittest.main()
