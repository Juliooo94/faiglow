Fairglow take home project
==============
Setup backend
-----

### Virtual environment

You will need uv. If not installed on your computer please follow the install section for your environment at <https://docs.astral.sh/uv/getting-started/installation/>

First, create a virtual environment with python version 3.13 or more.  



```bash
# Create virtual environment
uv venv -p 3.13
# install all dependencies
uv sync --frozen
# Start server
uv run flask --app backend/task_tracker run --debug
```

Setup frontend
-----

I use pnpm but you can use any of your favorite package manager.  

```bash
# Install dependancies
pnpm install
# Start server
pnpm run dev
```