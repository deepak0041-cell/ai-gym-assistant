# backend/services/diet_advisor.py
import google.generativeai as genai
import os

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-1.5-flash')

def get_diet_plan(bmi, goal, preferences):
    prompt = f'Create a diet plan for BMI {bmi}, goal: {goal}, preferences: {preferences}'
    response = model.generate_content(prompt)
    return response.text
