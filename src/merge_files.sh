#!/bin/bash
output_file="merged_content.txt"

# Очищення файлу перед записом
> "$output_file"

find . -type f ! -name "$(basename "$0")" | while read -r file; do
  relative_path="${file#./}"
  echo -e "\n## $relative_path\n" >> "$output_file"
  cat "$file" >> "$output_file"
  echo -e "\n" >> "$output_file"
done

echo "Файл $output_file створено."

