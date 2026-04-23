# iot/equipment_publisher.py
import paho.mqtt.client as mqtt
import json
import time

client = mqtt.Client()
client.connect('localhost', 1883)

print("Publisher started. Sending treadmill data...")

# Send data every 3 seconds
while True:
    data = {
        "speed": 8.5,
        "resistance": 3,
        "heart_rate": 120
    }
    client.publish('gym/equipment/treadmill', json.dumps(data))
    print(f"Sent: {data}")
    time.sleep(3)