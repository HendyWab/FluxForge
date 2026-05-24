from fastapi import FastAPI

app = FastAPI(
    title="IssueFlow AI",
    version="0.1.0"
)

@app.get("/")
async def root():
    return {
        "message": "IssueFlow AI API running"
    }
