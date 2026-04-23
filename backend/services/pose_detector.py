# backend/services/pose_detector.py
import cv2, mediapipe as mp

mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

def detect_pose(frame):
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(rgb)
    return results.pose_landmarks