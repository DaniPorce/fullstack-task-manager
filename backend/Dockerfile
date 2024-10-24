# backend/Dockerfile
FROM rust:latest

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il Cargo.toml e Cargo.lock
COPY Cargo.toml Cargo.lock ./

# Copia la directory src
COPY src ./src

# Compila le dipendenze e il progetto
RUN cargo build --release

# Esponi la porta
EXPOSE 8000

# Comando per avviare il server
CMD ["./target/release/backend"]
