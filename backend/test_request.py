import requests

url = 'http://127.0.0.1:5000/summarize'
data = {'text': 'This is an example text to summarize'}

response = requests.post(url, json=data)

print("Status code:", response.status_code)
print("Response text:", response.text)

try:
    print("Summary:", response.json())
except Exception as e:
    print("Error parsing JSON:", e)
