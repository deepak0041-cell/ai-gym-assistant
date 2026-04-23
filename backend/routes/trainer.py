from fastapi import APIRouter, UploadFile
import cv2
import numpy as np
from services.pose_detector import detect_pose

router = APIRouter(prefix='/trainer')

@router.post('/analyze-pose')
async def analyze(file: UploadFile):
    contents = await file.read()
    
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    landmarks = detect_pose(img)

    return {
        "reps": 5,  # dummy for now
        "feedback": "Good form!"
    }