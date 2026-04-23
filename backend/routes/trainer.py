# backend/routes/trainer.py
from fastapi import APIRouter, UploadFile
from services.pose_detector import detect_pose

router = APIRouter(prefix='/trainer')

@router.post('/analyze-pose')
async def analyze(file: UploadFile):
    # read frame, detect, return feedback
    return {'feedback': 'Good form!'}