# auth/Dockerfile
FROM python:3.9-slim

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il requirements.txt
COPY requirements.txt .

# Installa le dipendenze
RUN pip install -r requirements.txt

# Copia il resto del codice
COPY . .

# Esponi la porta
EXPOSE 5000

# Comando per avviare il server Flask
CMD ["python", "app.py"]
