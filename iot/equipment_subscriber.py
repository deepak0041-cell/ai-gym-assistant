# iot/equipment_subscriber.py
import paho.mqtt.client as mqtt
import json

def on_message(client, userdata, msg):
    data = json.loads(msg.payload)
    print(f"Equipment data received: {data}")
    # Later: Save to MongoDB, trigger AI adjustment

client = mqtt.Client()
client.on_message = on_message
client.connect('localhost', 1883)
client.subscribe('gym/equipment/#')

print("Subscriber listening for equipment data...")
client.loop_forever()