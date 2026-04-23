# backend/services/habit_predictor.py
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Train on: [hour, day_of_week, streak, last_skipped]
# Predicts: will_skip (0 or 1)

def predict_skip_risk(features):
    # Load pre-trained model or train here
    # Return risk score 0-100
    return {'skip_risk': 45, 'nudge': 'You usually workout at 6PM. Time to go!'}